import fetchMock, { FetchMock } from 'jest-fetch-mock';
import { ContentfulDynamicComponentService } from './ContentfulDynamicComponent.service';

jest.mock('@services/Redis/Redis.service');

describe('ContentfulDynamicComponentService service tests', () => {
  fetchMock.enableMocks();
  const locale = 'en-US';
  const contentfulEntryId = '1d4055c6NecTK4IW6jGyri';
  const serviceInstance = new ContentfulDynamicComponentService(
    locale,
    contentfulEntryId
  );

  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('ContentfulDynamicComponentService');
  });
});
