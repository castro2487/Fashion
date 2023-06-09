import { resolveRawComponentDataToFactory } from '@lib/utils/backend-only/test-helpers/resolveRawContentfulData';
import resolveResponse from 'contentful-resolve-response';
import { ContentfulBannerFactory } from './ContentfulBanner.factory';
import { CONTENTFUL_BANNER_COMPONENT_RESPONSE_DATA_MOCK } from './__mock__/ContentfulBanner.mock';
describe('ContentfulBannerFactory tests', () => {
  it('should map IContentfulBannerData structure to TContentfulBannerProps structure', () => {
    const expected = {
      asset: {
        alt: 'Rectangle 9106',
        src: 'https://amq-sandbox.getbynder.com/m/36e705d5b24017f4/webimage-Rectangle-9106.png',
      },
      cta: {
        image: {},
        linkCategory: 'womenSs23PreCollection',
        linkDisplayName: 'SS23 Pre Collection',
        linkDisplayType: 'Text',
        linkId: 'SS23-Pre-Collection',
        linkType: 'Category',
        linkUrl: 'womenSs23PreCollection',
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
      title: 'SS23 Pre Collection',
      type: 'full-width',
    };

    const componentData = resolveRawComponentDataToFactory(
      CONTENTFUL_BANNER_COMPONENT_RESPONSE_DATA_MOCK
    );
    const { fields } = componentData;
    const { data } = new ContentfulBannerFactory(fields);
    expect(data).toEqual(expected);
  });
});
