import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulBannerModel } from './ContentfulBanner.model';

export class ContentfulBannerFactory
  extends ContentfulFactory
  implements IContentfulBannerFactory
{
  _name = 'ContentfulBannerFactory';
  _model?: IContentfulBannerModel;
  data?: TContentfulBannerProps;

  constructor(contentfulBannerData: IContentfulBannerData) {
    super();
    if (!contentfulBannerData) return;
    this._model = new ContentfulBannerModel(contentfulBannerData);
    this.data = this.serializeObject(this._model) as TContentfulBannerProps;
  }
}
