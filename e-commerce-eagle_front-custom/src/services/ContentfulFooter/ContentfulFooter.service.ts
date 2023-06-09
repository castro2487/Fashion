import { ContentfulService } from '../Contentful/Contentful.service';

export const ERROR_LOAD_CONTENTFUL_COMPONENT_FOOTER_ENTRY_ID =
  'The ContentfulFooterService cannot load the footer entry id variable from .env file. Check the CONFIG_CONTENTFUL_COMPONENT_FOOTER_ENTRY_ID variable in your .env file.';
export class ContentfulFooterService
  extends ContentfulService
  implements IContentfulFooterService
{
  _name = 'ContentfulFooterService';
  _locale = '';
  _footerComponentId = '';

  constructor(locale: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
    this._footerComponentId = this._getEnvValue(
      'CONFIG_CONTENTFUL_COMPONENT_FOOTER_ENTRY_ID',
      ERROR_LOAD_CONTENTFUL_COMPONENT_FOOTER_ENTRY_ID
    );
  }

  async getFooterData() {
    const params = {
      query: {
        locale: this._locale,
        'sys.id': this._footerComponentId,
        include: '3',
      },
    };
    return await this.getEntries(params);
  }
}
