import { ContentfulService } from '../Contentful/Contentful.service';

export const ERROR_LOAD_CONTENTFUL_COMPONENT_HEADER_ENTRY_ID =
  'The ContentfulHeaderService cannot load the header entry id variable from .env file. Check the CONFIG_CONTENTFUL_COMPONENT_HEADER_ENTRY_ID variable in your .env file.';

export class ContentfulHeaderService
  extends ContentfulService
  implements IContentfulHeaderService
{
  _name = 'ContentfulHeaderService';
  _locale = '';
  _headerComponentId = '';

  constructor(locale: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
    this._headerComponentId = this._getEnvValue(
      'CONFIG_CONTENTFUL_COMPONENT_HEADER_ENTRY_ID',
      ERROR_LOAD_CONTENTFUL_COMPONENT_HEADER_ENTRY_ID
    );
  }

  async getHeaderData() {
    const params = {
      query: {
        'sys.id': this._headerComponentId,
        include: 5,
        locale: this._locale,
      },
    };
    const data = await this.getEntries(params);

    if (!data) return;

    const resolved = this.resolveRawContentfulResponse(data);
    return resolved;
  }
}
