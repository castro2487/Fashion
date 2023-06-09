import type { IncomingMessage } from 'http';
import cookie, { CookieSerializeOptions } from 'cookie';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import setCookieParser from 'set-cookie-parser';
export class Cookie {
  static MAX_AGE_1_YEAR = 1704085200; // 365 Days

  static parseCookies(req?: IncomingMessage) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
  }

  static serializeCookieData(
    cookieName: string,
    cookieValue: string,
    options?: CookieSerializeOptions
  ) {
    return cookie.serialize(cookieName, cookieValue, options);
  }

  static parseResponseCookieWithSplit(
    res: Response
  ): setCookieParser.CookieMap {
    const cookieHeaders = res.headers.get('set-cookie') || '';
    const splitCookies = Cookie.parseResponseSplitCookies(cookieHeaders);
    const parsedCookies = Cookie.parseResponseCookie(splitCookies, {
      map: true,
    });

    return parsedCookies;
  }

  static getCookie = getCookie;
  static getCookies = getCookies;
  static setCookie = setCookie;
  static deleteCookie = deleteCookie;

  static parseResponseCookie = setCookieParser.parse;
  static parseResponseIndividualSetCookieHeader = setCookieParser.parseString;
  static parseResponseSplitCookies = setCookieParser.splitCookiesString;
}

export type { CookieSerializeOptions };
