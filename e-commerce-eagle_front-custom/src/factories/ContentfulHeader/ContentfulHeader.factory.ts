import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulHeaderModel } from '@factories/ContentfulHeader/ContentfulHeader.model';

export class ContentfulHeaderFactory
  extends ContentfulFactory
  implements IContentfulHeaderFactory
{
  _name = 'ContentfulHeaderFactory';
  _model?: IContentfulHeaderModel;
  data?: TContentfulHeaderProps;

  constructor(
    contentfulHeaderData: IContentfulHeaderData,
    absoluteLinks?: boolean
  ) {
    super();
    if (!contentfulHeaderData) return;
    this._model = new ContentfulHeaderModel(
      contentfulHeaderData,
      absoluteLinks
    );
    this.data = this.serializeObject(this._model) as TContentfulHeaderProps;
  }
}
