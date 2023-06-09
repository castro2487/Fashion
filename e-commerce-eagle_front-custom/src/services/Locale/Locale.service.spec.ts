import fetchMock, { FetchMock } from 'jest-fetch-mock';
import { LocaleService } from './Locale.service';

jest.mock('@services/Redis/Redis.service');

describe('Contentful service tests', () => {
  fetchMock.enableMocks();
  let serviceInstance: LocaleService;
  const processEnvBackup = { ...process.env };

  beforeAll(() => {
    jest.resetModules();
    process.env = {
      NODE_ENV: 'test',
      CONFIG_CONTENTFUL_DELIVERY_API_TOKEN:
        'QdmQoTwx6fYAxHpymJkcfGtT5aZRNJxkz9V9uM3SixYPseCy6AX',
      CONFIG_CONTENTFUL_ENVIRONMENT: 'master',
      CONFIG_CONTENTFUL_PREVIEW_API_TOKEN: 'preview-token',
      CONFIG_CONTENTFUL_DELIVERY_REST_API_BASE_URL:
        'https://cdn.contentful.com',
      CONFIG_CONTENTFUL_PREVIEW_REST_API_BASE_URL: 'preview-rest-url',
      CONFIG_CONTENTFUL_SPACE_ID: 'W212sl55',
    };
    const locale = 'en-DE';
    serviceInstance = new LocaleService(locale);
  });

  afterAll(() => {
    process.env = { ...processEnvBackup }; // Restore old environment
  });

  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('LocaleService');
  });
});
