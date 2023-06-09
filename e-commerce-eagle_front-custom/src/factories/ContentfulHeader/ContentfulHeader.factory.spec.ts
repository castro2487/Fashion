import { ContentfulHeaderModel } from '@factories/ContentfulHeader/ContentfulHeader.model';
import { ContentfulHeaderFactory } from './ContentfulHeader.factory';
import { UPDATED_HEADER_MOCK } from './__mock__/ContentfulHeader.mock';

describe('ContentfulHeaderFactory', () => {
  test('should create an instance of ContentfulHeaderFactory with correct data', () => {
    const contentfulHeaderFactory = new ContentfulHeaderFactory(
      UPDATED_HEADER_MOCK
    );

    expect(contentfulHeaderFactory.data).toEqual({
      navigation: {
        categories: [
          {
            id: 'category-1',
            image: {},
            lightLogo: true,
            listType: 'tabs',
            name: 'Category 1',
            subcategories: [
              {
                editLinks: [
                  {
                    image: {},
                    linkDisplayName: 'Edit Link 1',
                    linkDisplayType: 'button',
                    linkId: 'edit-link-1',
                    linkOpenInNewTab: true,
                    linkType: 'URL',
                    linkUrl: '',
                  },
                ],
                editTitle: 'Edit Subcategory 1',
                id: 'subcategory-1',
                image: {},
                lightLogo: false,
                name: 'Subcategory 1',
              },
            ],
          },
        ],
        links: [
          {
            image: {},
            linkDisplayName: 'Link 1',
            linkDisplayType: 'button',
            linkId: 'link-1',
            linkOpenInNewTab: true,
            linkType: 'URL',
            linkUrl: '',
          },
        ],
      },
    });
  });
});
