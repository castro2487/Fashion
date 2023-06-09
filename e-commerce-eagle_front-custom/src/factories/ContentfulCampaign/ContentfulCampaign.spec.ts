import { ContentfulDynamicComponentService } from '@services/ContentfulDynamicComponent/ContentfulDynamicComponent.service';
import { ContentfulCampaignFactory } from '@factories/ContentfulCampaign/ContentfulCampaign.factory';
import { CONTENTFUL_CAMPAIGN_COMPONENT_RESPONSE_DATA_MOCK } from '@factories/ContentfulCampaign/__mock__/ContentfulCampaign.mock';

jest.mock('@services/Redis/Redis.service');

describe('Contentful Campaign tests', () => {
  it('should map IContentfulLinkModel structure to TContentfulLinkProps structure', () => {
    const contentfulData = CONTENTFUL_CAMPAIGN_COMPONENT_RESPONSE_DATA_MOCK;

    const campaignFactory = new ContentfulCampaignFactory(contentfulData);
    const { data: campaignData } = campaignFactory;
    const expected = {
      internalName: 'Campaign > The Slash',
      title: 'The Slash',
      subtitle: 'Test',
      highlightTag: 'NEW',
      productTile1: 'The Slash Bag',
      productTileLinkType1: 'Category',
      productTileProductId1: 'productTileProductId_1',
      productTile2: 'The Slash Bag',
      productTileLinkType2: 'Category',
      productTileProductId2: 'productTileProductId_2',
      productTile3: 'The Slash Bag',
      productTileLinkType3: 'Product',
      productTileProductId3: 'productTileProductId_3',
      productTiles: [
        { productTile: 'The Slash Bag', productTileLinkType: 'Category' },
        { productTile: 'The Slash Bag', productTileLinkType: 'Category' },
        { productTile: 'The Slash Bag', productTileLinkType: 'Product' },
      ],
      heading: {
        highlightTag: 'NEW',
        title: 'The Slash',
        subtitle: 'Test',
      },
      id: '',
    };

    expect(campaignData).toEqual(expected);
  });
});
