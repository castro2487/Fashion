import { ContentfulNavigationFactory } from '@factories/ContentfulNavigation/ContentfulNavigation.factory';

export class ContentfulHeaderModel implements IContentfulHeaderModel {
  navigation?: TContentfulNavigationProps;

  constructor(navigation: IContentfulHeaderData, absoluteLinks?: boolean) {
    if (!navigation) return;
    const { data } = new ContentfulNavigationFactory(navigation, absoluteLinks);
    this.navigation = data;
  }
}
