import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { ContentfulRichTextModel } from '@factories/ContentfulRichText/ContentfulRichText.model';

export class ContentfulRichTextFactory
  extends ContentfulFactory
  implements IContentfulRichTextFactory
{
  _name = 'ContentfulRichTextFactory';
  model?: IContentfulRichTextModel;
  data?: IContentfulRichTexProps;

  constructor(contentfulRichTextData?: IContentfulRichTextData) {
    super();
    if (!contentfulRichTextData) return;
    this.model = new ContentfulRichTextModel(contentfulRichTextData);
    this.data = this.serializeObject(this.model) as IContentfulRichTexProps;
  }
}
