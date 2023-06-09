import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulNavigationLinkModel } from './ContentfulNavigationLink.model';

export class ContentfulNavigationLinkFactory
  extends ContentfulFactory
  implements IContentfulNavigationLinkFactory
{
  _referenceFieldData: ContentfulEntryProps<IContentfulLinkData>;
  _model: IContentfulNavigationLinkModel | undefined;
  data: IContentfulNavigationLinkModel;
  constructor(
    referenceFieldData: ContentfulEntryProps<IContentfulLinkData>,
    absoluteLinks?: boolean
  ) {
    super();
    this._referenceFieldData = referenceFieldData;
    this.data = this._mapResponseToData(absoluteLinks);
  }

  _mapResponseToData(absoluteLinks?: boolean) {
    const { fields } = this._referenceFieldData;
    this._model = new ContentfulNavigationLinkModel(fields, absoluteLinks);
    return this._model;
  }

  getNavLinkObject() {
    return this.data;
  }
}
