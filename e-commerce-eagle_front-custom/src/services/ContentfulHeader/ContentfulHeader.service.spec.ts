import fetchMock, { FetchMock } from 'jest-fetch-mock';
import { ContentfulHeaderService } from './ContentfulHeader.service';
import { CONTENTFUL_HEADER_CONTENT_DATA_MOCK } from '@factories/ContentfulHeader/__mock__/ContentfulHeader.mock';

jest.mock('@services/Redis/Redis.service');

describe('Contentful service tests', () => {
  fetchMock.enableMocks();
  const locale = 'en-fr';
  const serviceInstance = new ContentfulHeaderService(locale);

  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('ContentfulHeaderService');
  });
});
