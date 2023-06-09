import type { NextApiRequest, NextApiResponse } from 'next';

import { Cookie } from '@factories/Cookie/Cookie.factory';
import { MAX_COOKIE_TTL_90D } from '@constants/configs';

export function setServerCookie(
  req: NextApiRequest,
  res: NextApiResponse,
  cookieName: string,
  val = '',
  override = {}
) {
  Cookie.setCookie(cookieName, val, {
    req,
    res,
    maxAge: MAX_COOKIE_TTL_90D,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    httpOnly: true,
    domain: process.env.APP_SESSION_COOKIE_DOMAIN as string,
    ...override,
  });
}
