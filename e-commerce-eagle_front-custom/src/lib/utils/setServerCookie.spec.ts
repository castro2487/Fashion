import { setServerCookie } from './setServerCookie';
import { Cookie } from '@factories/Cookie/Cookie.factory';
import { MAX_COOKIE_TTL_90D } from '@constants/configs';
import { NextApiRequest, NextApiResponse } from 'next';

jest.mock('@factories/Cookie/Cookie.factory', () => {
  const originalModule = jest.requireActual('@factories/Cookie/Cookie.factory');

  return {
    ...originalModule,
    Cookie: {
      ...originalModule.Cookie,
      setCookie: jest.fn(),
    },
  };
});

describe('setServerCookie', () => {
  const mockedCookie = Cookie as jest.Mocked<typeof Cookie>;

  it('sets a cookie with the default options', () => {
    const req = {} as NextApiRequest;
    const res = {} as NextApiResponse;

    setServerCookie(req, res, 'cookieName', 'cookieValue');

    expect(mockedCookie.setCookie).toHaveBeenCalledWith(
      'cookieName',
      'cookieValue',
      {
        req,
        res,
        maxAge: MAX_COOKIE_TTL_90D,
        secure: false,
        path: '/',
        httpOnly: true,
        domain: process.env.APP_SESSION_COOKIE_DOMAIN,
      }
    );
  });

  it('overrides default cookie options', () => {
    const req = {} as NextApiRequest;
    const res = {} as NextApiResponse;

    setServerCookie(req, res, 'cookieName', 'cookieValue', {
      maxAge: 1000,
      secure: true,
      httpOnly: false,
      domain: 'example.com',
    });

    expect(mockedCookie.setCookie).toHaveBeenCalledWith(
      'cookieName',
      'cookieValue',
      {
        req,
        res,
        maxAge: 1000,
        secure: true,
        path: '/',
        httpOnly: false,
        domain: 'example.com',
      }
    );
  });
});
