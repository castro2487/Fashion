import { createMocks } from 'node-mocks-http';
import { handler } from '@modules/api/data/footer/footer';
import { SFCC_REQUEST_HEADER_KEY } from '@constants';
import { CONTENTFUL_FOOTER_CONTENT_TYPE_DATA_MOCK } from '@services/__mock__/ContentfulFooter.mock';
import { ContentfulFooterService } from '@services/ContentfulFooter/ContentfulFooter.service';

describe('api/data/footer endpoint tests', () => {
  beforeAll(() => {
    jest
      .spyOn(ContentfulFooterService.prototype, 'getFooterData')
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve(CONTENTFUL_FOOTER_CONTENT_TYPE_DATA_MOCK)
          )
      );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should pass', () => {
    expect(true);
  });

  it('should return footer component data on request with valid locale param and valid sfcc client id request footer', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        locale: 'en-us',
      },
      headers: {
        [SFCC_REQUEST_HEADER_KEY]: process.env.APP_SFCC_REQUEST_CLIENT_ID,
      },
    });

    const expected = {
      linkItems: [
        {
          title: 'Service Links items 1',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }, { lightLogo: false }],
        },
        {
          title: 'Service Links Items 2',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }],
        },
        {
          title: 'Service Links Items 3',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }],
        },
        {
          title: 'Social Links Items',
          id: 'exclusiveServices',
          linkItem: [{ lightLogo: false }],
        },
      ],
      copyright: 'Copyright 2023',
      newsletterTitle: 'Newsletter Title',
    };
    await handler(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expected);
  });

  it('should return footer component data on request with valid locale, absoluteUrls params and valid sfcc client id request footer', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        locale: 'en-us',
        absoluteUrls: 'true',
      },
      headers: {
        [SFCC_REQUEST_HEADER_KEY]: process.env.APP_SFCC_REQUEST_CLIENT_ID,
      },
    });

    const expected = {
      linkItems: [
        {
          title: 'Service Links items 1',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }, { lightLogo: false }],
        },
        {
          title: 'Service Links Items 2',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }],
        },
        {
          title: 'Service Links Items 3',
          id: 'serviceLinkItems',
          linkItem: [{ lightLogo: false }],
        },
        {
          title: 'Social Links Items',
          id: 'exclusiveServices',
          linkItem: [{ lightLogo: false }],
        },
      ],
      copyright: 'Copyright 2023',
      newsletterTitle: 'Newsletter Title',
    };

    await handler(req as any, res as any);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expected);
  });
});
