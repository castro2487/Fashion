import type { NextApiRequest, NextApiResponse } from 'next';
import type { AuthFactory } from '@factories/Auth/Auth.factory';
import { setServerCookie } from '@lib/utils';
import { COOKIES_BROWSER_READABLE } from '@constants';

export const setSFCCCookiesAPISide = (
  req: NextApiRequest,
  res: NextApiResponse,
  authFactory: AuthFactory
) => {
  // This determine the SFCC user type between Guest and Authenticated user
  // If the "sfccIdToken" is defined, it's an authenticated user
  const hybridSfccCookieName = authFactory.session.sfccIdToken
    ? 'cc-nx'
    : 'cc-nx-g';

  setServerCookie(
    req,
    res,
    hybridSfccCookieName,
    authFactory.session.sfccRefreshToken
  );
  setServerCookie(req, res, 'usid', authFactory.usid, COOKIES_BROWSER_READABLE);
  setServerCookie(
    req,
    res,
    'cid',
    authFactory.session.sfccCustomerId,
    COOKIES_BROWSER_READABLE
  );
  setServerCookie(
    req,
    res,
    'enc_user_id',
    authFactory.session.sfccEncUserId,
    COOKIES_BROWSER_READABLE
  );
  setServerCookie(req, res, 'dwsid', authFactory.session.sfccSessionId);
};
