import { ContentfulSpotlightFactory } from '@factories/ContentfulSpotlight/ContentfulSpotlight.factory';
import { CONTENTFUL_SPOTLIGHT_COMPONENT_RESPONSE_DATA_MOCK } from '@factories/ContentfulSpotlight/__mock__/ContentfulSpotlight.mock';

describe('ContentfulSpotlightFactory tests', () => {
  it('should map IContentfulLinkModel structure to TContentfulLinkProps structure', () => {
    const contentfulData = CONTENTFUL_SPOTLIGHT_COMPONENT_RESPONSE_DATA_MOCK;

    const spotlightFactory = new ContentfulSpotlightFactory(contentfulData);
    const { data: spotlightData } = spotlightFactory;
    const expectedItems = [
      {
        linkDisplayName: 'Online Assistance',
        linkType: 'External',
        linkUrl: 'https://www.google.com',
        linkDisplayType: 'Text',
        linkId: 'online-assistance',
        linkOpenInNewTab: true,
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/962749fd78e29cf/Medium-ezgif-1.jpg',
        },
      },
      {
        linkDisplayName: 'Store Services',
        linkType: 'Category',
        linkUrl: '',
        linkDisplayType: 'Text',
        linkId: 'social-link-2',
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/27371b48d6867f48/webimage-image-2.png',
        },
      },
      {
        linkDisplayName: 'SS23 Pre Collection',
        linkType: 'External',
        linkCategory: 'womenSs23PreCollection',
        linkUrl: '',
        linkDisplayType: 'Text',
        linkId: 'SS23-Pre-Collection',
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
        },
      },
    ];

    expect(spotlightData?.links).toEqual(expectedItems);
    expect(spotlightData?.id).toEqual('Home > Spotlight');
  });
});
