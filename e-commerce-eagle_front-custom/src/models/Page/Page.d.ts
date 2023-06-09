interface IPage {
  meta: TPageMeta;
  notFound?: boolean;
  regions: TPageRegion;
}

type TPageMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicals?: [];
};

type TPageRegions = {
  topRegion: IRegion;
  mainRegion: IRegion;
  bottomRegion: IRegion;
};
