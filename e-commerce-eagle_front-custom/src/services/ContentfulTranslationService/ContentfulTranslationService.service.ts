import { ContentfulService } from '@services/Contentful/Contentful.service';

export class ContentfulTranslationService
  extends ContentfulService
  implements IContentfulTranslationService
{
  _name = 'ContentfulTranslationService';
  _locale = '';
  _translationsEntryId = 'globalTranslations';

  constructor(locale: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
    this._translationsEntryId = this._getEnvValue(
      'CONFIG_CONTENTFUL_COMPONENT_TRANSLATIONS_ENTRY_ID',
      this._translationsEntryId
    );
  }

  async getTranslations(locale?: string) {
    const cmsLocale = locale
      ? this.convertToContentfulLocale(locale)
      : this._locale;
    const options = {
      expire: 86400,
      customCacheKey: `translations_${cmsLocale}`,
      query: {
        select: 'fields.translations',
        content_type: 'globalTranslations',
        'sys.id': this._translationsEntryId,
        locale: cmsLocale,
      },
    };

    return await this.getEntries(options);
  }
}
