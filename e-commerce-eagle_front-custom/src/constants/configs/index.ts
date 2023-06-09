// !!!!!! IMPORTANT NODE !!!!!!
// NEVER LOAD THIS FILE ON A CLIENT SIDE SCRIPT
//
import { type IronSessionOptions } from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    sessionInfo?: TSessionInfo;
  }
}

export const MAX_COOKIE_TTL_30D = 60 * 60 * 24 * 30; // 30 days in seconds

export const MAX_COOKIE_TTL_90D = 60 * 60 * 24 * 90; // 90 days in seconds

export const COOKIES_HTTP_ONLY = {
  maxAge: MAX_COOKIE_TTL_90D,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  httpOnly: true,
  domain: process.env.APP_SESSION_COOKIE_DOMAIN as string,
};

export const COOKIES_BROWSER_READABLE = {
  ...COOKIES_HTTP_ONLY,
  httpOnly: false,
};

export const IRON_SESSION_OPTIONS: IronSessionOptions = {
  ttl: MAX_COOKIE_TTL_90D,
  cookieName: (process.env.APP_SESSION_COOKIE_NAME || 'session') as string,
  password: (process.env.APP_SESSION_COOKIE_ENCYRPTION ||
    'cookie_password') as string,
  cookieOptions: COOKIES_HTTP_ONLY,
};

export const SFCC_REQUEST_HEADER_KEY = 'x-sfcc-client-id';
export const HEALTH_REQUEST_HEADER_KEY = 'x-app-health-client-id';
export const INTERNAL_REQUEST_HEADER_KEY = 'x-app-internal-token';
export const WEBOOK_REQUEST_HEADER_KEY = 'x-webhook-client-id';
