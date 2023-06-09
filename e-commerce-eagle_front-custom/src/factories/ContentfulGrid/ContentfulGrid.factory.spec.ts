import { ContentfulGridFactory } from './ContentfulGrid.factory';
import { CONTENTFUL_GRID_COMPONENT_RESPONSE_DATA_MOCK } from './___mock__/ContentfulGrid.mock';
import resolveResponse from 'contentful-resolve-response';

describe('ContentfulGridFactory tests', () => {
  it('should map IContentfulGridData structure to TContentfulGridProps structure ', async () => {
    const expected = {
      heading: {
        label: 'This is grid Label',
        title: 'This it grid title',
      },
      tiles: [
        {
          title: 'Second Tile EN',
          type: 'dark',
          variant: 'card',
          asset: {
            alt: 'TEST',
            src: 'https://amq-sandbox.getbynder.com/m/0f825bb3eda976c8/webimage-TEST.jpg',
          },
          cta: {
            image: {},
            linkCategory: 'aw22collection',
            linkColor: 'Light',
            linkDisplayName: 'Account',
            linkDisplayType: 'Text',
            linkId: 'account',
            linkOpenInNewTab: true,
            linkType: 'Category',
            linkUrl: 'aw22collection',
          },
        },
        {
          asset: {
            alt: 'TEST',
            src: 'https://amq-sandbox.getbynder.com/m/0f825bb3eda976c8/webimage-TEST.jpg',
          },
          cta: {
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
            },
            linkCategory: 'womenSs23PreCollection',
            linkDisplayName: 'SS23 Pre Collection',
            linkDisplayType: 'Text',
            linkId: 'SS23-Pre-Collection',
            linkType: 'External',
            linkUrl: '',
          },
          ctaSecondary: {
            image: {},
            linkCategory: 'tailoring-men',
            linkDisplayName: 'Tailoring',
            linkDisplayType: 'Text',
            linkId: 'tailoring',
            linkType: 'Category',
            linkUrl: 'tailoring-men',
          },
          title: 'TITLE - SS23 Pre Collection',
          type: 'light',
          variant: 'banner',
        },
        {
          asset: {
            alt: 'Large-PR_sh020_amsc_comp_forGrade_v001.1027_V1',
            src: 'https://amq-sandbox.getbynder.com/m/77d26f9b32a32172/webimage-Large-PR_sh020_amsc_comp_forGrade_v001-1027_V1.png',
          },
          cta: {
            image: {},
            linkCategory: 'tailoring-men',
            linkDisplayName: 'Tailoring',
            linkDisplayType: 'Text',
            linkId: 'tailoring',
            linkType: 'Category',
            linkUrl: 'tailoring-men',
          },
          title: 'Third Tile',
          type: 'light',
          variant: 'padded',
        },
      ],
    };

    const resolved = resolveResponse(
      CONTENTFUL_GRID_COMPONENT_RESPONSE_DATA_MOCK
    ).pop();
    const { fields } = resolved;
    const { data } = new ContentfulGridFactory(fields);
    expect(data).toEqual(expected);
  });
});
