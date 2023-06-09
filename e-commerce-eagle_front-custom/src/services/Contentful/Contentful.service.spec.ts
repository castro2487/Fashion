import {
  ContentfulService,
  ERROR_LOAD_CONTENTFUL_DELIVERY_API_TOKEN,
  ERROR_LOAD_CONTENTFUL_ENVIRONMENT,
  ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN,
  ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL,
  ERROR_LOAD_CONTENTFUL_SPACE_ID,
} from './Contentful.service';

jest.mock('@services/Redis/Redis.service');

describe('Contentful service tests', () => {
  let serviceInstance: ContentfulService;

  beforeEach(() => {
    serviceInstance = new ContentfulService();
  });

  it('should return the service name', () => {
    expect(serviceInstance.name).toEqual('ContentfulService');
  });

  it('should load necessary variables', () => {
    expect(serviceInstance._delivery_api_token).toEqual(
      'DELIVERY-TOKEN-x6fYAxHpymJkcfGtT5aZRNz9V9uM3SixYPseCAX'
    );
    expect(serviceInstance._environment).toEqual('development');
    expect(serviceInstance._preview_api_token).toEqual(
      'PREVIEW-TOKEN-xU2pAeRdsDB7txnQrCBFfMm9N3icrPtJ536cP'
    );

    expect(serviceInstance._delivery_rest_api_base_url).toEqual(
      'https://cdn.contentful.com'
    );
    expect(serviceInstance._preview_rest_api_base_url).toEqual(
      'https://preview.contentful.com'
    );
    expect(serviceInstance._space_id).toEqual('SPACE-ID-2sl55');
  });

  it('should throw an error when the delivery api token value can not be loaded', () => {
    process.env = { ...process.env, CONFIG_CONTENTFUL_DELIVERY_API_TOKEN: '' };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_DELIVERY_API_TOKEN);
      }
    }
  });

  it('should throw an error when the preview token value can not be loaded', () => {
    process.env = { ...process.env, CONFIG_CONTENTFUL_PREVIEW_API_TOKEN: '' };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN);
    }
  });

  it('should throw an error when teh delivery api base url value can not be loaded', () => {
    process.env = {
      ...process.env,
      CONFIG_CONTENTFUL_DELIVERY_REST_API_BASE_URL: '',
    };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL);
      }
    }
  });

  it('should throw an error when the preview api base url value can not be loaded', () => {
    process.env = {
      ...process.env,
      CONFIG_CONTENTFUL_PREVIEW_REST_API_BASE_URL: '',
    };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL);
      }
    }
  });

  it('should throw an error when the environment value can not be loaded', () => {
    process.env = { ...process.env, CONFIG_CONTENTFUL_ENVIRONMENT: '' };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_ENVIRONMENT);
      }
    }
  });

  it('should throw an error when the space id value can not be loaded', () => {
    process.env = {
      ...process.env,
      CONFIG_CONTENTFUL_SPACE_ID: '',
    };
    try {
      serviceInstance = new ContentfulService();
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
      if (e instanceof Error) {
        expect(e.message).toBe(ERROR_LOAD_CONTENTFUL_SPACE_ID);
      }
    }
  });
});
