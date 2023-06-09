import { ContentfulGridModel } from './ContentfulGrid.model';
import { ContentfulFactory } from '../Contentful/Contentful.factory';

export class ContentfulGridFactory
  extends ContentfulFactory
  implements IContentfulGridFactory
{
  _name = 'ContentfulGridFactory';
  _model?: IContentfulGridModel;
  data?: TContentfulGridProps;

  constructor(contentfulGridData: IContentfulGridData) {
    super();
    if (!contentfulGridData) return;
    this._model = new ContentfulGridModel(contentfulGridData);
    this.data = this.serializeObject(this._model) as TContentfulGridProps;
  }
}
