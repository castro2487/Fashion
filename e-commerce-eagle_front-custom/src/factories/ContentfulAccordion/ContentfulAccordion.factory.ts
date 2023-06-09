import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { ContentfulAccordionModel } from '@factories/ContentfulAccordion/ContentfulAccordion.model';

export class ContentfulAccordionFactory
  extends ContentfulFactory
  implements IContentfulAccordionFactory
{
  _name = 'ContentfulAccordionFactory';
  _model?: IContentfulAccordionModel;
  data?: TContentfulAccordionProps;

  constructor(contentfulAccordionData: IContentfulAccordionModel) {
    super();
    if (!contentfulAccordionData) return;
    this._model = new ContentfulAccordionModel(contentfulAccordionData);
    this.data = this.serializeObject(this?._model) as TContentfulAccordionProps;
  }
}
