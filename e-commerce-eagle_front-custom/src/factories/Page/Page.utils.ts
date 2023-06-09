import { CONTENTFUL_CONTENT_TYPES } from '@constants';
import { ContentfulBannerFactory } from '@factories/ContentfulBanner/ContentfulBanner.factory';
import { ContentfulCampaignFactory } from '@factories/ContentfulCampaign/ContentfulCampaign.factory';
import { ContentfulGridFactory } from '@factories/ContentfulGrid/ContentfulGrid.factory';
import { ContentfulHeaderFactory } from '@factories/ContentfulHeader/ContentfulHeader.factory';
import { ContentfulLinkFactory } from '@factories/ContentfulLink/ContentfulLink.factory';
import { ContentfulRichTextFactory } from '@factories/ContentfulRichText/ContentfulRichText.factory';
import { ContentfulSpotlightFactory } from '@factories/ContentfulSpotlight/ContentfulSpotlight.factory';
import { Page } from '@models/Page/Page.model';

export const componentDataMapping: TComponentDataMapping = {
  [CONTENTFUL_CONTENT_TYPES.SPOTLIGHT_COMPONENT]: {
    factory: ContentfulSpotlightFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.TILE_COMPONENT]: {
    factory: ContentfulBannerFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.RICH_TEXT]: {
    factory: ContentfulRichTextFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.LINK_ITEM]: {
    factory: ContentfulLinkFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.CAMPAIGN]: {
    factory: ContentfulCampaignFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.GRID]: {
    factory: ContentfulGridFactory,
  },
  [CONTENTFUL_CONTENT_TYPES.HEADER]: {
    factory: ContentfulHeaderFactory,
  },
};

export class PageUtils {
  static _getComponentType(item: TCommonObject) {
    if (item.nodeType) return 'richText';

    return item?.sys?.contentType?.sys?.id;
  }

  static _getComponentId(item: TCommonObject) {
    return item?.sys?.id;
  }

  static _getFields(item: TCommonObject) {
    return item?.fields || {};
  }

  static _getComponentData(component: TCommonObject) {
    const type = this._getComponentType(component);
    const fields = this._getFields(component);

    if (componentDataMapping[type as CONTENTFUL_CONTENT_TYPES]) {
      const ComponentFactory =
        componentDataMapping[type as CONTENTFUL_CONTENT_TYPES].factory;
      const { data } = new ComponentFactory(fields);
      return data;
    }

    return [];
  }

  static _mergePages(
    currentPage: Page | null,
    globalPage: Page | null,
    excludeRegion = ['mainRegion']
  ): Page | null {
    // no merge necessary if no global page exists
    if (!globalPage) {
      return currentPage;
    }

    // return null if page does not exist
    if (!currentPage) {
      globalPage.notFound = true;
      return globalPage;
    }

    // use global page regions for empty current page regions
    Object.keys(globalPage.regions).map((region) => {
      const globalRegion = globalPage.regions[region as keyof TPageRegions];
      const currentRegion = currentPage.regions[region as keyof TPageRegions];
      if (
        !currentRegion.components?.length &&
        !excludeRegion.includes(region)
      ) {
        currentPage.regions[region as keyof TPageRegions] = globalRegion;
      }
    });

    return currentPage;
  }
}
