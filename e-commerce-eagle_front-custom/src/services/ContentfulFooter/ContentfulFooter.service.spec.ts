import fetchMock, { FetchMock } from 'jest-fetch-mock';
import { ContentfulFooterService } from './ContentfulFooter.service';

jest.mock('@services/Redis/Redis.service');

describe('Contentful service tests', () => {
  fetchMock.enableMocks();
  let serviceInstance: ContentfulFooterService;
  const processEnvBackup = { ...process.env };

  beforeAll(() => {
    jest.resetModules();
    process.env = {
      NODE_ENV: 'test',
      CONFIG_CONTENTFUL_DELIVERY_API_TOKEN:
        'QdmQoTwx6fYAxHpymJkcfGtT5aZRNJxkz9V9uM3SixYPseCy6AX',
      CONFIG_CONTENTFUL_PREVIEW_API_TOKEN:
        '2QEiZBgtc8FMaK52U2pAeRdsDB7tnQrCBFfMm9N3icrPtJ536cP',
      CONFIG_CONTENTFUL_DELIVERY_REST_API_BASE_URL:
        'https://cdn.contentful.com',
      CONFIG_CONTENTFUL_ENVIRONMENT: 'master',
      CONFIG_CONTENTFUL_PREVIEW_REST_API_BASE_URL:
        'https://preview.contentful.com',
      CONFIG_CONTENTFUL_SPACE_ID: 'W212sl55',
      CONFIG_CONTENTFUL_COMPONENT_HEADER_ENTRY_ID: '2E5ZPRIcXiupx7e6ZFl2',
      CONFIG_CONTENTFUL_COMPONENT_FOOTER_ENTRY_ID: '1zxlzWvcyhUe3EY2EHN72S',
    };
    const locale = 'en-US';
    serviceInstance = new ContentfulFooterService(locale);
  });

  afterAll(() => {
    process.env = { ...processEnvBackup }; // Restore old environment
  });

  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('ContentfulFooterService');
  });
});
