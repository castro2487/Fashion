import { ContentfulBannerFactory } from '@factories/ContentfulBanner/ContentfulBanner.factory';
export class ContentfulGridModel implements IContentfulGridModel {
  heading: IContentfulHeadingProps;
  tiles: (IContentfulBannerModel | undefined)[] | undefined;

  constructor({
    headingTitle,
    headingLabel,
    headingSubtitle,
    ...tiles
  }: IContentfulGridData) {
    this.heading = {
      title: headingTitle,
      label: headingLabel,
      subtitle: headingSubtitle,
    };
    this.tiles = this._extractTiles(tiles);
  }

  _extractTiles(tiles: {
    homePageBlocks: IContentfulTile[];
    contactPageBlocks: IContentfulTile[];
  }) {
    if (!tiles) return;
    const { homePageBlocks, contactPageBlocks } = tiles;
    const tilesBlock = homePageBlocks || contactPageBlocks;
    if (!tilesBlock.length) return;
    return tilesBlock.map(
      (bannerComponentData: ContentfulEntryProps<IContentfulBannerData>) => {
        const { fields } = bannerComponentData;
        const { data } = new ContentfulBannerFactory(fields);
        return data;
      }
    );
  }
}
