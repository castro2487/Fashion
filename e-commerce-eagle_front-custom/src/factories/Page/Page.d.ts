interface TContentfulPage {
  internalName: string;
  pageTitle: string;
  description: string;
  keywords: string;
  canonicals: [];
  slug: string;
  topRegion?: [];
  mainRegion?: [];
  bottomRegion?: [];
}

type TComponentDataMapping = {
  [key in CONTENTFUL_CONTENT_TYPES]: {
    factory: new (fields: any) => any;
  };
};
