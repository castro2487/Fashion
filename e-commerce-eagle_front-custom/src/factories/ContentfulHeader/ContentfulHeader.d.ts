interface IContentfulHeaderFactory extends ContentfulFactory {
  _model?: IContentfulHeaderModel;
  data?: TContentfulHeaderProps;
}

interface IContentfulHeaderData extends IContentfulData {
  generalLinks: ContentfulEntryProps<IContentfulLinkDataFields>[];
  navigation: TContentfulNavigationData;
}
interface IContentfulHeaderModel {
  navigation?: TContentfulNavigationProps;
}

type TContentfulHeaderProps = {
  navigation: TContentfulNavigationProps;
};
