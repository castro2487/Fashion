type TGridTileListEntry = (string | Map<unknown, unknown>)[];
type TGridTileList = TGridTileListEntry[];

interface IContentfulGridFactory extends ContentfulFactory {
  _model?: IContentfulGridModel;
  data?: TContentfulGridProps;
}

interface IContentfulGridData extends IContentfulData {
  headingTitle?: string;
  headingLabel?: string;
  headingSubtitle?: string;
  homePageBlocks: IContentfulTile[];
  contactPageBlocks: IContentfulTile[];
  type: string;
}
interface IContentfulGridModel {
  heading: IContentfulHeadingProps;
  tiles: ContentfulBannerModel[] | undefined;
  _extractTiles(tiles: {
    homePageBlocks: IContentfulTile[];
    contactPageBlocks: IContentfulTile[];
  }): (IContentfulBannerModel | undefined)[] | undefined;
}

type TContentfulGridProps = {
  heading: IContentfulHeadingProps;
  tiles: (IContentfulBannerModel | undefined)[] | undefined;
};
