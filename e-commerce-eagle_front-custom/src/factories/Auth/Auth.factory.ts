// import { Factory } from '@headless-front-core/Factory';
import {
  v4 as uuidv4,
  validate as uuidValidate,
  version as uuidVersion,
} from 'uuid';

const UUID_VERSION = 4;

class AuthFactory implements IAuthFactory {
  _name = 'AuthFactory';
  _session: TSessionInfo = {
    sfccSessionType: 'guest',
  } as TSessionInfo;
  _isNewSession = false;

  static GUEST: TSessionType = 'guest';

  static AUTHENTICATED: TSessionType = 'authenticated';

  get usid(): string {
    return this.session?.usid || '';
  }

  get sfccRefreshToken(): string {
    return this.session?.sfccRefreshToken || '';
  }

  get isGuestSession(): boolean {
    return this.session.sfccSessionType !== AuthFactory.AUTHENTICATED;
  }

  get isNewSession(): boolean {
    return this._isNewSession;
  }

  set session(session: TSessionInfo) {
    this._session = session;
  }

  get session(): TSessionInfo {
    return this._session;
  }

  get sessionRegion(): string {
    return this.session?.sessionRegion;
  }

  omitSensisbleInfo(): TSessionInfo {
    const {
      usid,
      sfccCustomerId,
      sfccEncUserId,
      sfccSessionId,
      sfccSessionType,
      sessionRegion,
      sessionCreationDate,
      sessionUpdateDate,
    } = this.session;
    const sessionInfo = {
      usid,
      sfccCustomerId,
      sfccEncUserId,
      sfccSessionId,
      sfccSessionType,
      sessionRegion,
      sessionCreationDate,
      sessionUpdateDate,
    } as TSessionInfo;

    return sessionInfo;
  }

  createSession(
    {
      usid = '',
      sessionRegion = '',
      sfccRefreshToken = '',
      isAuthenticated = false,
    }: TSessionParams = <TSessionParams>{}
  ): TSessionInfo {
    const currentTime = new Date();
    const sessionInfo = {
      usid: this.isValidUSID(usid) ? usid : this.generateUSID(),
      sessionRegion,
      sfccRefreshToken,
      sfccSessionType: isAuthenticated
        ? AuthFactory.AUTHENTICATED
        : AuthFactory.GUEST,
      sessionCreationDate: currentTime,
      sessionUpdateDate: currentTime,
    } as TSessionInfo;

    this._isNewSession = true;
    this.session = sessionInfo;
    return sessionInfo;
  }

  updateUserSession(params: TSessionBaseInfo): TSessionInfo {
    const updates = {
      ...this.session,
      ...params,
      sfccSessionType: params?.sfccIdToken
        ? AuthFactory.AUTHENTICATED
        : AuthFactory.GUEST,
      sessionUpdateDate: new Date(),
    } as TSessionInfo;

    this.session = updates;
    return this.session;
  }

  generateUSID(): string {
    return uuidv4();
  }

  isValidUSID(usid: string): boolean {
    return uuidValidate(usid) && uuidVersion(usid) === UUID_VERSION;
  }

  isValidSession(): boolean {
    return !!this.session && this.isValidUSID(this.session?.usid);
  }
}

export { AuthFactory };
