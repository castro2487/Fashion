import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulLinkModel } from './ContentfulLink.model';

export class ContentfulLinkFactory
  extends ContentfulFactory
  implements IContentfulLinkFactory
{
  _name = 'ContentfulLinkFactory';
  _model?: ContentfulLinkModel;
  data?: TContentfulLinkProps;

  constructor(
    contentfulLinkData?: ContentfulEntryProps<IContentfulLinkDataFields>,
    absoluteLinks?: boolean
  ) {
    super();
    if (!contentfulLinkData) return;
    const { fields } = contentfulLinkData;
    this._model = new ContentfulLinkModel(fields, absoluteLinks);
    this.data = this.serializeObject(this._model) as TContentfulLinkProps;
  }
}
