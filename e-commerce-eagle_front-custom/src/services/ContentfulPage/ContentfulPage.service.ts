import { ContentfulService } from '@services/Contentful/Contentful.service';

export class ContentfulPageService
  extends ContentfulService
  implements IContentfulPageService
{
  _name = 'ContentfulPageService';
  _locale = '';

  constructor(locale: string) {
    super();
    this._locale = this.convertToContentfulLocale(locale);
  }

  async getPageByIdOrSlug(slug: string) {
    const options = {
      expire: 10,
      query: {
        content_type: 'page',
        include: 7,
        'fields.slug': slug || '',
        locale: this._locale,
      },
    };

    return await this.getEntries(options);
  }

  async getPageById(pageId: string) {
    const options = {
      expire: 10,
      query: {
        content_type: 'page',
        include: 7,
        'sys.id': pageId || '',
        locale: this._locale,
      },
    };

    return await this.getEntries(options);
  }
}
