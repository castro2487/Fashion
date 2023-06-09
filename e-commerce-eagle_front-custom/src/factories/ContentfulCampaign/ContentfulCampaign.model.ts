import { BynderImageProps, HeadingProps } from '@amq';
export class ContentfulCampaignModel implements IContentfulCampaignModel {
  name?: string;
  internalName: string;
  title: string;
  subtitle: string;
  highlightTag: string;
  campaignMainImage?: BynderImageProps;
  productTile1?: string;
  productTileLinkType1?: TContentfulCampaignLinkType;
  productTileImage1?: BynderImageProps;
  productTileProductId1?: string;
  productTileCategory1?: TCommonObject;
  productTile2?: string;
  productTileImage2?: BynderImageProps;
  productTileLinkType2?: TContentfulCampaignLinkType;
  productTileProductId2?: string;
  productTileCategory2?: TCommonObject;
  productTile3?: string;
  productTileImage3?: BynderImageProps;
  productTileLinkType3?: TContentfulCampaignLinkType;
  productTileProductId3?: string;
  productTileCategory3?: TCommonObject;
  productTiles?: ICampaignProductTile[];
  heading?: HeadingProps;
  asset?: BynderImageProps;
  id: string;

  constructor(contentfulDataMap: TCommonObject, contentfulEntryId?: string) {
    const {
      internalName,
      title,
      subtitle,
      highlightTag,
      campaignMainImage,
      productTile1,
      productTileLinkType1,
      productTileImage1,
      productTileProductId1,
      productTileCategory1,
      productTile2,
      productTileImage2,
      productTileLinkType2,
      productTileProductId2,
      productTileCategory2,
      productTile3,
      productTileImage3,
      productTileLinkType3,
      productTileProductId3,
      productTileCategory3,
    } = contentfulDataMap;
    this.internalName = internalName;
    this.title = title;
    this.subtitle = subtitle;
    this.highlightTag = highlightTag;
    this.campaignMainImage = this.mapImageToCampaignImage(
      campaignMainImage?.fields
    );

    this.productTile1 = productTile1;
    this.productTileLinkType1 = productTileLinkType1;
    this.productTileImage1 = this.mapImageToCampaignImage(
      productTileImage1?.fields
    );
    this.productTileProductId1 = productTileProductId1;
    this.productTileCategory1 = productTileCategory1?.fields;

    this.productTile2 = productTile2;
    this.productTileImage2 = this.mapImageToCampaignImage(
      productTileImage2?.fields
    );
    this.productTileLinkType2 = productTileLinkType2;
    this.productTileProductId2 = productTileProductId2;
    this.productTileCategory2 = productTileCategory2?.fields;

    this.productTile3 = productTile3;
    this.productTileImage3 = this.mapImageToCampaignImage(
      productTileImage3?.fields
    );
    this.productTileLinkType3 = productTileLinkType3;
    this.productTileProductId3 = productTileProductId3;
    this.productTileCategory3 = productTileCategory3?.fields;

    // mapped additionally to match the TCampaignProps
    this.productTiles = this.createProductTileArray(contentfulDataMap);
    this.heading = {
      highlightTag: this.highlightTag,
      title: this.title,
      subtitle: this.subtitle,
    };
    this.asset = this.campaignMainImage;
    this.id = contentfulEntryId || '';
  }

  mapImageToCampaignImage = (image?: TContentfulBynderImageUnmapped) => {
    return image
      ? ({
          src: image.imageUrl,
          alt: image.imageAltText,
        } as BynderImageProps)
      : undefined;
  };

  getProductTile = (
    index: number,
    contentfulDataMap: TCommonObject
  ): ICampaignProductTile | undefined => {
    const productTile = contentfulDataMap[`productTile${index}`];
    const productTileLinkType =
      contentfulDataMap[`productTileLinkType${index}`];
    const productTileImage = this.mapImageToCampaignImage(
      contentfulDataMap[`productTileImage${index}`]?.fields
    );

    if (productTile) {
      return {
        productTile,
        productTileLinkType,
        productTileImage,
      };
    }
  };

  createProductTileArray(
    contentfulDataMap: TCommonObject
  ): ICampaignProductTile[] {
    return [...Array(3)]
      .map((_, index) => {
        return this.getProductTile(index + 1, contentfulDataMap);
      })
      .filter(Boolean) as ICampaignProductTile[];
  }
}
