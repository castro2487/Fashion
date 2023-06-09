import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { ContentfulCampaignModel } from '@factories/ContentfulCampaign/ContentfulCampaign.model';

export class ContentfulCampaignFactory
  extends ContentfulFactory
  implements IContentfulCampaignFactory
{
  _name = 'ContentfulCampaignFactory';
  _model?: IContentfulCampaignModel;
  data?: TContentfulCampaignProps;

  constructor(contentfulCampaignData: IContentfulCampaignModel) {
    super();
    if (!contentfulCampaignData) return;
    this._model = new ContentfulCampaignModel(contentfulCampaignData);
    this.data = this.serializeObject(this._model) as TContentfulCampaignProps;
  }
}
