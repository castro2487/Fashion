import { AuthFactory } from '@factories/Auth/Auth.factory';

describe('AuthFactory', () => {
  let authFactory: AuthFactory;

  beforeEach(() => {
    authFactory = new AuthFactory();
  });

  describe('createSession', () => {
    it('creates a new session with a unique USID', () => {
      const session = authFactory.createSession();

      expect(session).toMatchObject({
        usid: expect.any(String),
        sfccSessionType: AuthFactory.GUEST,
      });
      expect(authFactory.isNewSession).toBe(true);
      expect(authFactory.isValidUSID(session.usid)).toBe(true);
    });

    it('sets the sfccRefreshToken and sfccSessionType when specified', () => {
      const sfccRefreshToken = 'my-refresh-token';
      const session = authFactory.createSession({
        sfccRefreshToken,
        isAuthenticated: true,
        sessionRegion: 'en-US',
      });

      expect(session).toMatchObject({
        sfccRefreshToken: sfccRefreshToken,
        sfccSessionType: AuthFactory.AUTHENTICATED,
      });
    });
  });

  describe('updateUserSession', () => {
    it('updates the user session with new values', () => {
      const session = authFactory.createSession({
        usid: 'my-usid',
        isAuthenticated: true,
        sessionRegion: 'en-US',
      });

      const updatedSession = authFactory.updateUserSession({
        sfccCustomerId: 'my-customer-id',
        sfccIdToken: 'my-id-token',
      });

      expect(updatedSession).toMatchObject({
        usid: session.usid,
        sfccCustomerId: 'my-customer-id',
        sfccIdToken: 'my-id-token',
        sfccSessionType: AuthFactory.AUTHENTICATED,
      });
      expect(updatedSession.sessionUpdateDate).not.toBe(
        session.sessionUpdateDate
      );
    });
  });

  describe('omitSensisbleInfo', () => {
    it('returns a new object with only sensitive session info removed', () => {
      const session = authFactory.createSession({
        usid: 'my-usid',
        sfccRefreshToken: 'my-refresh-token',
        isAuthenticated: true,
        sessionRegion: 'en-US',
      });

      const sessionInfo = authFactory.omitSensisbleInfo();

      expect(sessionInfo).toMatchObject({
        usid: session.usid,
        sfccSessionType: AuthFactory.AUTHENTICATED,
        sessionCreationDate: session.sessionCreationDate,
        sessionUpdateDate: session.sessionUpdateDate,
      });
    });
  });

  describe('isValidSession', () => {
    it('returns true for a valid session', () => {
      const session = authFactory.createSession();

      const isValid = authFactory.isValidSession();

      expect(isValid).toBe(true);
      expect(session).toBeDefined();
    });

    it('returns false for an invalid session', () => {
      authFactory.session = null;

      const isValid = authFactory.isValidSession();

      expect(isValid).toBe(false);
    });

    it('returns false for a session with an invalid USID', () => {
      const session = authFactory.createSession();
      session.usid = 'invalid-usid';

      const isValid = authFactory.isValidSession();

      expect(isValid).toBe(false);
    });
  });
});
