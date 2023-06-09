import { ContentfulService } from '../Contentful/Contentful.service';

export class LocaleService extends ContentfulService implements ILocaleService {
  _name = 'LocaleService';
  _locale = '';

  constructor(locale: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
  }

  async getLocales() {
    const query = {
      id: 'locales',
    };
    return await this.getContentType(query);
  }
}
