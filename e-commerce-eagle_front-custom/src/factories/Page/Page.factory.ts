import resolveResponse from 'contentful-resolve-response';
import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { TranslationsFactory } from '@factories/Translations/Translations.factory';
import { ContentfulPageService } from '@services/ContentfulPage/ContentfulPage.service';
import { PageUtils } from './Page.utils';
import { Page } from '@models/Page/Page.model';

export class PageFactory extends ContentfulFactory {
  _name = 'PageFactory';
  _pageService: ContentfulPageService;
  _locale: string;

  constructor(locale: string) {
    super();
    this._locale = locale;
    this._pageService = new ContentfulPageService(locale);
  }

  async getPage(slug: string, getById = false): Promise<Page | null> {
    let rawPageData;

    if (getById) {
      rawPageData = await this._pageService.getPageById(slug);
    } else {
      rawPageData = await this._pageService.getPageByIdOrSlug(slug);
    }

    const contentfulMappedData = resolveResponse(rawPageData);
    if (contentfulMappedData && contentfulMappedData.length) {
      return new Page(contentfulMappedData[0]);
    }

    return null;
  }

  async getPageWithGlobal(slug: string, getPageById = false): Promise<Page> {
    const globalPage = await this.getPage('global', true);
    const currentPage = await this.getPage(slug, getPageById);
    const mergedPages = PageUtils._mergePages(currentPage, globalPage);

    return mergedPages as Page;
  }

  async getPageFallbackTranslations(
    scope: string[] = [],
    defaultScope = ['global', 'navigation', 'search', 'footer']
  ): Promise<TCommonObject> {
    const newScope = [...defaultScope, ...scope];

    const translationsFactory = new TranslationsFactory('en', newScope);

    await translationsFactory.initialize();
    return translationsFactory.getAll();
  }

  async getPageTranslations(
    scope: string[] = [],
    defaultScope = ['global', 'navigation', 'search', 'footer']
  ): Promise<TCommonObject> {
    const newScope = [...defaultScope, ...scope];
    const translationsFactory = new TranslationsFactory(this._locale, newScope);
    const fallbackTranslations = await this.getPageFallbackTranslations(
      scope,
      defaultScope
    );

    await translationsFactory.initialize();

    const pageTranslations =
      translationsFactory.getAllWithFallback(fallbackTranslations);

    return pageTranslations;
  }
}
