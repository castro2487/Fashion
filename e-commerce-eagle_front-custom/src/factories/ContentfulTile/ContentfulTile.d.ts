interface IContentfulTileFactory extends IContentfulFactory {
  _name?: string;
  _langContext?: string;
  _contentfulEntryId?: string;
  _service: IContentfulDynamicComponentService;
  _contentfulData?: IContentfulEntryReferenceProps;
  _contentfulExtractedData?: TCommonObject[];
  _contentfulDataMap: TCommonObject;
  data: ContentfulTileModel | TCommonObject;
  _modelData(): ContentfulTileModel;
  getTileObject(): ContentfulTileModel;
}
type IContentfulTileType = 'difference' | 'dark' | 'light';
type IContentfulTileVariant = 'banner' | 'card';
type IContentfulTileAlign = 'center' | 'bottom';

interface IContentfulTileModel {
  name?: string;
  title: string;
  variant: IContentfulTileVariant;
  type: IContentfulTileVariant;
  padded: boolean;
  asset: BynderImageProps;
  cta: LinkProps;
  ctaSecondary?: LinkProps;
  align?: IContentfulTileAlign;
}
