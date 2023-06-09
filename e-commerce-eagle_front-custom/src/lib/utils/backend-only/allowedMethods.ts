import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from '@constants/http';
import { THTTPCallbackActions } from '@amq';

export function allowedMethods(
  actions: THTTPCallbackActions,
  methods = ['GET'],
  domainWhitelist = '*'
) {
  return async (req: NextApiRequest, res: NextApiResponse<TCommonObject>) => {
    const method: THttpMethod = req.method as THttpMethod;
    const whitelistedMethods = [
      HTTP_METHODS.OPTIONS,
      HTTP_METHODS.HEAD,
      ...methods,
    ];
    const isMethodAllowed = whitelistedMethods.indexOf(<string>method) > -1;

    await NextCors(req, res, {
      methods: whitelistedMethods,
      origin: domainWhitelist,
    });

    if (!method || !isMethodAllowed) {
      res.setHeader('Allow', methods);
      res.status(405).end(`Method ${method} Not Allowed`);
      return;
    }

    actions[method]?.(req, res);
  };
}
