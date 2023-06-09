import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

export type TSetContext = (rawKey: string, value: string) => void;
export type THttpContenxtMiddleware = (
  setContext: TSetContext,
  req: NextRequest,
  evt?: NextFetchEvent
) => Promise<NextResponse>;

const ctxKey = (key: string) => `ctx-${key.toLowerCase()}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHttpContext = (req: NextRequest | any, rawKey: string) => {
  const key = ctxKey(rawKey);

  let headerValue =
    typeof req.headers.get === 'function'
      ? req.headers.get(key) // Edge Runtime
      : req.headers[key]; // Node Runtime

  // Necessary for node in development environment
  if (!headerValue) {
    headerValue = req.socket?._httpMessage?.getHeader(key);
  }

  if (headerValue) {
    return headerValue;
  }

  // Use a dummy url because some environments only return
  // a path, not the full url
  const reqURL = new URL(req.url, 'http://dummy.url');

  return reqURL.searchParams.get(key);
};

export const withHttpContext = (
  allowedKeys: string[],
  middleware: THttpContenxtMiddleware
) => {
  for (let i = 0; i < allowedKeys.length; i++) {
    if (typeof allowedKeys[i] !== 'string') {
      throw new Error('All keys must be strings');
    }
    allowedKeys[i] = ctxKey(allowedKeys[i]);
  }

  return async (req: NextRequest, evt: NextFetchEvent) => {
    const reqURL = new URL(req.url);

    for (const allowedKey of allowedKeys) {
      if (req.headers.get(allowedKey) || reqURL.searchParams.get(allowedKey)) {
        // TODO Add logger here instead of throwing error
        // throw new Error(
        //   `Key ${allowedKey.substring(
        //     4
        //   )} is being spoofed. Blocking this request.`
        // );
      }
    }

    const data: TCommonObject = {};

    const setContext = (rawKey: string, value: string) => {
      const key = ctxKey(rawKey);
      if (!allowedKeys.includes(key)) {
        // TODO Add logger here instead of throwing error
        // throw new Error(
        //   `Key ${rawKey} is not allowed. Add it to withContext's first argument.`
        // );
      }
      if (typeof value !== 'string') {
        // TODO Add logger here instead of throwing error
        // throw new Error(
        //   `Value for ${rawKey} must be a string, received ${typeof value}`
        // );
      }
      data[key] = value;
    };

    const res = (await middleware(setContext, req, evt)) || NextResponse.next();

    // setContext wasn't called, passthrough
    if (Object.keys(data).length === 0) {
      return res;
    }

    // Don't modify redirects
    if (res.headers.get('Location')) {
      return res;
    }

    const rewriteURL = new URL(
      res.headers.get('x-middleware-rewrite') || req.url
    );

    // Don't modify cross-origin rewrites
    if (reqURL.origin !== rewriteURL.origin) {
      return res;
    }

    // Set context directly on the res object (headers)
    // and on the rewrite url (query string)
    for (const key in data) {
      res.headers.set(key, data[key]);
      rewriteURL.searchParams.set(key, data[key]);
    }

    // set the updated rewrite url
    res.headers.set('x-middleware-rewrite', rewriteURL.href);

    return res;
  };
};
