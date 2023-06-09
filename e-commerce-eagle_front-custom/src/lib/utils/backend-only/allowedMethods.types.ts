import type { NextApiRequest, NextApiResponse } from 'next';

declare module '@amq' {
  type THTTPCallbackAction = (
    req: NextApiRequest,
    res: NextApiResponse<TCommonObject>
  ) => unknown;

  type THTTPCallbackActions = {
    [key in THttpMethod]?: THTTPCallbackAction;
  };
}
