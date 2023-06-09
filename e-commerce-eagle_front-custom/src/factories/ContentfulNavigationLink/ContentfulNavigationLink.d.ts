interface IContentfulNavigationLinkFactory extends IFactory {
  _referenceFieldData: ContentfulEntryProps;
  _model: IContentfulNavigationLinkModel | undefined;
  data: IContentfulNavigationLinkModel | undefined;
}

interface IContentfulNavigationLinkModel extends IContentfulLinkModel {
  lightLogo: boolean;
  image?: string;
}
