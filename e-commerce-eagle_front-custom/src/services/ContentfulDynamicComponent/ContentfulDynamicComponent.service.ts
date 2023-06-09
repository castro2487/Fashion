import resolveResponse from 'contentful-resolve-response';
import { ContentfulService } from '../Contentful/Contentful.service';

export class ContentfulDynamicComponentService
  extends ContentfulService
  implements IContentfulDynamicComponentService
{
  _name = 'ContentfulDynamicComponentService';
  _locale;
  _contentfulEntryId;
  data: TCommonObject;

  constructor(locale: string, contentfulEntryId: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
    this._contentfulEntryId = contentfulEntryId;
    this.data = {};
  }

  async getComponentData() {
    const params = {
      query: {
        locale: this._locale,
        include: '5',
        'sys.id': this._contentfulEntryId,
      },
    };
    return await this.getEntries(params);
  }

  async initialize() {
    const data = await this.getComponentData();
    const { fields } = resolveResponse(data).pop() || {};

    this.data = fields;
    return fields || {};
  }
}
