// import { Service } from '@headless-front-core/Service';

import { RedisService } from '@services/Redis/Redis.service';
import { getCountryFromLocale } from '@lib/utils/getCountryFromLocale';

export class CustomerSessionService extends RedisService {
  // implements ICustomerSessionService
  constructor() {
    super();
    this.name = 'SESSION';
  }

  async getSession(usid = ''): Promise<TSession> {
    const sessionInfo = this.getObject(usid);
    return sessionInfo as Promise<TSession>;
  }

  async setSession(usid: string, sessionInfo: TSessionInfo): Promise<string> {
    await this.addToSet(
      getCountryFromLocale(sessionInfo.sessionRegion).toLocaleLowerCase(),
      usid
    );
    return this.set(usid, JSON.stringify(sessionInfo));
  }
}
