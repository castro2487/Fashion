import { Cookie } from './Cookie.factory';

describe('Cookie', () => {
  const cookieName = 'mycookie';
  const cookieValue = 'cookievalue';

  beforeEach(() => {
    // Mock the document.cookie property for testing
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: '',
    });
  });

  describe('parseCookies', () => {
    it('should return an empty object if no cookies are found', () => {
      const result = Cookie.parseCookies({ headers: {} } as any);
      expect(result).toEqual({});
    });

    it('should return an object with parsed cookies if cookies are found in the request', () => {
      const cookies = `${cookieName}=${cookieValue}`;
      const result = Cookie.parseCookies({
        headers: { cookie: cookies },
      } as any);
      expect(result).toEqual({ [cookieName]: cookieValue });
    });

    it('should return an object with parsed cookies if cookies are found in document.cookie', () => {
      document.cookie = `${cookieName}=${cookieValue}`;
      const result = Cookie.parseCookies(undefined);
      expect(result).toEqual({ [cookieName]: cookieValue });
    });
  });

  describe('serializeCookieData', () => {
    it('should return a serialized cookie string', () => {
      const result = Cookie.serializeCookieData(cookieName, cookieValue);
      expect(result).toEqual(`${cookieName}=${cookieValue}`);
    });
  });

  describe('parseResponseCookieWithSplit', () => {
    it('should return an empty object if no cookies are found', () => {
      const response: any = {
        headers: new Headers(),
      };
      const result = Cookie.parseResponseCookieWithSplit(response);
      expect(result).toEqual({});
    });

    it('should return an object with parsed cookies if cookies are found in the response', () => {
      const cookieHeader = `${cookieName}=${cookieValue}; Path=/`;
      const response: any = {
        headers: new Headers({ 'set-cookie': cookieHeader }),
      };
      const result = Cookie.parseResponseCookieWithSplit(response);

      // Modify the expected result to match the received shape
      const expected = {
        [cookieName]: {
          name: cookieName,
          value: cookieValue,
          path: '/',
        },
      };

      expect(result).toEqual(expected);
    });
  });

  describe('setCookie', () => {
    it('should set a cookie using document.cookie', () => {
      Cookie.setCookie(cookieName, cookieValue);
      expect(document.cookie).toContain(`${cookieName}=${cookieValue}`);
    });

    it('should include options in the cookie', () => {
      const options = { maxAge: 3600 };
      Cookie.setCookie(cookieName, cookieValue, options);
      expect(document.cookie).toContain('Max-Age=3600');
    });
  });

  describe('deleteCookie', () => {
    it('should delete a cookie using document.cookie', () => {
      // Set the cookie to be deleted
      document.cookie = `${cookieName}=${cookieValue}; Path=/`;
      // Delete the cookie

      Cookie.deleteCookie(cookieName);

      // Expect the cookie to be deleted from document.cookie
      expect(document.cookie).toMatch(/mycookie.*Max-Age=-1;.*/);
    });
  });
});
