import { ContentfulFooterService } from '@services/ContentfulFooter/ContentfulFooter.service';
import { ContentfulFooterFactory } from './ContentfulFooter.factory';
import { CONTENTFUL_FOOTER_CONTENT_TYPE_DATA_MOCK } from '@services/__mock__/ContentfulFooter.mock';

describe('ContentfulFooterFactory tests', () => {
  beforeAll(() => {
    jest
      .spyOn(ContentfulFooterService.prototype, 'getFooterData')
      .mockImplementation(
        () =>
          new Promise((resolve, reject) =>
            resolve(CONTENTFUL_FOOTER_CONTENT_TYPE_DATA_MOCK)
          )
      );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should initialize and return data', async () => {
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

    const langContext = 'en';
    const factoryInstance = new ContentfulFooterFactory(langContext);
    await factoryInstance.initialize();

    expect(factoryInstance.data).toEqual(expected);
  });
});
