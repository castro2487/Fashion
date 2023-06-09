type TSession = TSessionInfo | undefined;

interface ICustomerSessionService {
  getSession(usid?: string): Promise<TSession>;
  setSession(usid: string, sessionInfo: TSessionInfo): Promise<string>;
}
