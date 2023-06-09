import { NextResponse, type NextRequest } from 'next/server';
import type { ResponseCookie } from 'next/dist/server/web/spec-extension/cookies';
import { getIronSession } from 'iron-session/edge';
import { IRON_SESSION_OPTIONS, COOKIES_BROWSER_READABLE } from '@constants';
import { Cookie } from '@factories/Cookie/Cookie.factory';
import { AuthFactory } from '@factories/Auth/Auth.factory';
import { internalRequestPost } from '@lib/internalRequestPost';
import { withHttpContext, TSetContext } from '@lib/httpContext';
import { hasCountryContextChanged } from '@lib/hasCountryContextChanged';

const createInternalSession = async ({
  usid,
  sessionRegion,
  sfccCustomerId,
  sfccRefreshToken,
  sfccSessionId,
  sfccSessionType,
}: TSessionInfo) => {
  const data = {
    usid,
    sessionRegion,
    sfccCustomerId,
    sfccRefreshToken,
    sfccSessionId,
    sfccSessionType,
  };

  return internalRequestPost(
    `/api/create-session?locale=${sessionRegion}`,
    data
  );
};

const shouldTrySFCCSessionRestore = (
  countryContextChanged: boolean,
  req: NextRequest
) => {
  const usid = req.cookies.get('usid');
  const sfccGuestRefreshToken = req.cookies.get('cc-nx-g');
  const sfccAuthenticatedRefreshToken = req.cookies.get('cc-nx');
  const sfccRefreshToken =
    sfccGuestRefreshToken || sfccAuthenticatedRefreshToken;

  if (!usid && countryContextChanged && sfccRefreshToken) {
    return true;
  }

  return false;
};

const restorePreviousSessionData = (
  req: NextRequest,
  authFactory: AuthFactory
) => {
  const usid = req.cookies.get('usid');
  const sfccSessionId = req.cookies.get('dwsid');
  const sfccCustomerId = req.cookies.get('cid');
  const sfccGuestRefreshToken = req.cookies.get('cc-nx-g');
  const sfccAuthenticatedRefreshToken = req.cookies.get('cc-nx');
  const sfccRefreshToken =
    sfccGuestRefreshToken || sfccAuthenticatedRefreshToken;

  authFactory.createSession({
    usid: usid?.value,
    sessionRegion: req.nextUrl.locale,
    sfccRefreshToken: sfccRefreshToken?.value,
    isAuthenticated: !!sfccAuthenticatedRefreshToken,
  });

  authFactory.updateUserSession({
    sfccSessionId: sfccSessionId?.value,
    sfccCustomerId: sfccCustomerId?.value,
  } as TSessionBaseInfo);
};

export const middleware = withHttpContext(
  ['usid'],
  async (setContext: TSetContext, req: NextRequest) => {
    const res = NextResponse.next();

    // Note: req.nextUrl.locale is only supported on Page Endpoints not API Endpoints
    if (req.nextUrl) {
      const ironSession = await getIronSession(req, res, IRON_SESSION_OPTIONS);
      const { sessionInfo } = ironSession;
      const authFactory = new AuthFactory();
      const { languageContextChanged, countryContextChanged } =
        hasCountryContextChanged(req);

      if (countryContextChanged || languageContextChanged) {
        res.cookies.set('preferred-locale', req.nextUrl.locale, {
          ...COOKIES_BROWSER_READABLE,
          maxAge: Cookie.MAX_AGE_1_YEAR,
        });
      }

      authFactory.session = (
        countryContextChanged ? null : sessionInfo
      ) as TSessionInfo;

      // TODO
      // We need to explicitly whitelist urls to avoid performance lag
      if (!authFactory.isValidSession()) {
        if (
          countryContextChanged &&
          !shouldTrySFCCSessionRestore(countryContextChanged, req)
        ) {
          // If country DID change in the locale, drop previous session and create a new one
          authFactory.createSession({
            sessionRegion: req.nextUrl.locale,
          });
        } else {
          // If country DID NOT changed in the locale, try restoring previous session
          restorePreviousSessionData(req, authFactory);
        }

        ironSession.sessionInfo = authFactory.omitSensisbleInfo();

        res.cookies.set('usid', authFactory.usid, {
          ...COOKIES_BROWSER_READABLE,
        });
      }

      if (authFactory.isNewSession) {
        const sessionResponse = await createInternalSession(
          authFactory.session
        );
        const newSessionCookies =
          Cookie.parseResponseCookieWithSplit(sessionResponse);

        Object.keys(newSessionCookies).forEach((key: string) => {
          const { value: cookieValue, ...cookieToSetOptions } =
            newSessionCookies[key];

          if (key === 'usid') {
            authFactory.updateUserSession({ usid: cookieValue });
          }

          res.cookies.set(
            key,
            cookieValue,
            cookieToSetOptions as ResponseCookie
          );
        });
      }

      setContext('usid', authFactory.usid);

      await ironSession.save();
    }

    return res;
  }
);

export const config = {
  matcher: [
    '/',
    '/product/:path*',
    '/category/:path*',
    '/content/:path*',
    '/search:path*',
  ],
};
