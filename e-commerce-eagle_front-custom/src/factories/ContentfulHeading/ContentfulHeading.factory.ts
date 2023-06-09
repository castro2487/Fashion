import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';

export class ContentfulHeadingFactory
  extends ContentfulFactory
  implements IContentfulHeadingFactory
{
  _name = 'ContentfulHeadingFactory';
  _referenceFieldData: ContentfulEntryProps<IContentfulHeadingResponseFields>;
  data: IContentfulHeadingResponseFields;

  constructor(
    referenceFieldData: ContentfulEntryProps<IContentfulHeadingResponseFields>
  ) {
    super();

    this._referenceFieldData = referenceFieldData;
    const { fields } = this._referenceFieldData;
    this.data = fields;
  }
}
