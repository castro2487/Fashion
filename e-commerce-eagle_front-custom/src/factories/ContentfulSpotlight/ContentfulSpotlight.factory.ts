import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { ContentfulSpotlightModel } from '@factories/ContentfulSpotlight/ContentfulSpotlight.model';

export class ContentfulSpotlightFactory
  extends ContentfulFactory
  implements IContentfulSpotlightFactory
{
  _name = 'ContentfulSpotlightFactory';
  _model?: IContentfulSpotlightModel;
  data?: TContentfulSpotlightProps;

  constructor(contentfulSpotlightData: IContentfulSpotlightModel) {
    super();
    if (!contentfulSpotlightData) return;
    this._model = new ContentfulSpotlightModel(contentfulSpotlightData);
    this.data = this.serializeObject(this?._model) as TContentfulSpotlightProps;
  }
}
