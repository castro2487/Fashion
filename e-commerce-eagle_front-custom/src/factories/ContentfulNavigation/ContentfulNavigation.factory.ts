import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulNavigationModel } from './ContentfulNavigation.model';

export class ContentfulNavigationFactory
  extends ContentfulFactory
  implements IContentfulNavigationFactory
{
  _name = 'ContentfulNavigationFactory';
  _model?: ContentfulNavigationModel;
  data?: TContentfulNavigationProps;

  constructor(
    contentfulNavigationData: IContentfulNavigationData,
    absoluteLinks?: boolean
  ) {
    super();
    this._model = new ContentfulNavigationModel(
      contentfulNavigationData,
      absoluteLinks
    );
    this.data = this.serializeObject(this._model) as TContentfulNavigationProps;
  }
}
