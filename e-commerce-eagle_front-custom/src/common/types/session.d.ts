type TSessionStatus = 'new' | 'valid' | 'refreshed' | 'invalid';
type TSessionType = 'guest' | 'authenticated';

type TSessionBaseInfo = {
  sfccIdToken?: string;
  sfccCustomerId?: string;
  sfccEncUserId?: string;
  sfccSessionId?: string;
  sfccAccessToken?: string;
  sfccRefreshToken?: string;
  [key: string]: string | number | boolean | Date | undefined;
};

type TSessionInfo = TSessionBaseInfo & {
  usid: string;
  sessionRegion: string;
  sessionCreationDate?: Date;
  sessionUpdateDate?: Date;
  sfccSessionType: TSessionType;
};

type TSessionParams = TSessionBaseInfo & {
  isAuthenticated?: boolean;
  usid?: string | undefined;
  sessionRegion: string;
};
