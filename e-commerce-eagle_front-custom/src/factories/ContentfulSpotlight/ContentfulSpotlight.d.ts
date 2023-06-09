interface IContentfulSpotlightFactory extends IContentfulFactory {
  _model?: IContentfulSpotlightModel;
  data?: TContentfulSpotlightProps;
}

interface IContentfulSpotlightModel {
  internalName?: string;
  links: TContentfulLinkProps[];
  id?: string;
}

interface TContentfulSpotlightProps {
  links: ContentfulLink[];
  id: string;
}

type IContentfulSpotlightData = IContentfulData<{
  links: IContentfulLinkData[];
}>;
