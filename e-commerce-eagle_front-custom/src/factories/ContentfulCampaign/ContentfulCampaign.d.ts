interface IContentfulCampaignFactory extends IContentfulFactory {
  _model?: IContentfulCampaignModel;
  data?: TContentfulCampaignProps;
}

type TContentfulCampaignLinkType = 'Product' | 'Category';

interface ICampaignProductTile {
  productTile: string;
  productTileLinkType: TContentfulCampaignLinkType;
  productTileImage: BynderImageProps;
}

interface IContentfulCampaignModel {
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
}

type TContentfulCampaignProps = {
  productTiles?: ICampaignProductTile[];
  heading: HeadingProps;
  asset: BynderImageProps;
  id: string;
};
