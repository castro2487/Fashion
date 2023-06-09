import fetchMock, { FetchMock } from 'jest-fetch-mock';
import {
  AlgoliaService,
  ERROR_LOAD_ALGOLIA_APPLICATION_ID,
  ERROR_LOAD_ALGOLIA_ADMIN_API_KEY,
} from './Algolia.service';

jest.mock('@services/Redis/Redis.service');

describe('Contentful service tests', () => {
  fetchMock.enableMocks();
  let serviceInstance: AlgoliaService;
  const indexName = 'AMQIndex';

  beforeEach(() => {
    serviceInstance = new AlgoliaService(indexName);
    (fetch as FetchMock).resetMocks();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('AlgoliaService');
  });

  it('should load necessary variables', () => {
    expect(serviceInstance._applicationID).toEqual('AMQAlgoliaApplicationID');
    expect(serviceInstance._adminAPIKey).toEqual('AMQAlgoliaAdminApiKey');
  });

  it('should throw an error when the Algolia application ID can not be loaded', () => {
    process.env = { ...process.env, ERROR_LOAD_ALGOLIA_APPLICATION_ID: '' };
    try {
      serviceInstance = new AlgoliaService(indexName);
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_ALGOLIA_APPLICATION_ID);
      }
    }
  });

  it('should throw an error when the Algolia application ID can not be loaded', () => {
    process.env = { ...process.env, ERROR_LOAD_ALGOLIA_APPLICATION_ID: '' };
    try {
      serviceInstance = new AlgoliaService(indexName);
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_ALGOLIA_APPLICATION_ID);
      }
    }
  });

  it('should throw an error when the Algolia admin API can not be loaded', () => {
    process.env = { ...process.env, ERROR_LOAD_ALGOLIA_ADMIN_API_KEY: '' };
    try {
      serviceInstance = new AlgoliaService(indexName);
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_ALGOLIA_ADMIN_API_KEY);
      }
    }
  });

  it('should initialize Algolia index and error on this index search', async () => {
    try {
      const options = { resource: 'entries', preview: false };
      await serviceInstance.index.search('Foo');
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Object);
      if (e instanceof Object) {
        expect(e.message).toBe(
          'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.'
        );
      }
    }
  });
});
