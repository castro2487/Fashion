import { CustomerSessionService } from './CustomerSession.service';

import { RedisService } from '@services/Redis/Redis.service';

jest.mock('@services/Redis/Redis.service');

describe('CustomerSessionService', () => {
  let customerSessionService: CustomerSessionService;

  beforeEach(() => {
    customerSessionService = new CustomerSessionService();
  });

  describe('getSession', () => {
    it('should get the default session successfully', async () => {
      const result = await customerSessionService.getSession(
        customerSessionService.name
      );
      expect(result).toBeUndefined();
      expect(RedisService.prototype.getObject).toHaveBeenCalledWith(
        customerSessionService.name
      );
    });
  });

  describe('setSession', () => {
    it('should set the session object in Redis and return "OK"', async () => {
      const mockedSessionInfo: TSessionInfo = {
        usid: '123',
        sessionRegion: 'FR',
        sfccSessionType: 'authenticated',
        sfccIdToken: 'token',
        sfccCustomerId: 'customerId',
        sfccEncUserId: 'encUserId',
        sfccSessionId: 'sessionId',
        sfccAccessToken: 'accessToken',
        sfccRefreshToken: 'refreshToken',
        sessionCreationDate: new Date(),
        sessionUpdateDate: new Date(),
      };

      const setMock = jest.fn().mockImplementation(() => Promise.resolve('OK'));

      jest.spyOn(RedisService.prototype, 'set').mockImplementation(setMock);
      jest.spyOn(RedisService.prototype, 'get').mockImplementation(setMock);
      jest
        .spyOn(RedisService.prototype, 'addToSet')
        .mockImplementation(setMock);
      jest
        .spyOn(RedisService.prototype, 'existsInSet')
        .mockImplementation(setMock);
      jest
        .spyOn(RedisService.prototype, 'getItemsInSet')
        .mockImplementation(setMock);
      jest
        .spyOn(RedisService.prototype, 'removeFromSet')
        .mockImplementation(setMock);
      jest
        .spyOn(RedisService.prototype, 'getObject')
        .mockImplementation(setMock);

      const result = await customerSessionService.setSession(
        customerSessionService.name,
        mockedSessionInfo
      );

      expect(result).toEqual('OK');
      expect(setMock).toHaveBeenCalledWith(
        customerSessionService.name,
        JSON.stringify(mockedSessionInfo)
      );
    });
  });
});
