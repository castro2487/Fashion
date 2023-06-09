interface IAuthFactory {
  omitSensisbleInfo(): TSessionInfo;
  createSession(params: TSessionCreate): TSessionInfo;
  updateUserSession(params: TSessionBaseInfo): TSessionInfo;
  generateUSID(): string;
  isValidUSID(usid: string): boolean;
  isValidSession(): boolean;
}
