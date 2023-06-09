import { TranslationsModel } from './Translations.model';
import { ContentfulTranslationService } from '@services/ContentfulTranslationService/ContentfulTranslationService.service';

export class TranslationsFactory implements ITranslationsFactory {
  _name = 'TranslationsFactory';
  _translations: TranslationsModel | undefined;
  _translationService: ContentfulTranslationService;
  _scope?: string[];

  constructor(locale: string, scope?: string[]) {
    this._translationService = new ContentfulTranslationService(locale);
    this._scope = scope;
  }

  async initialize(locale?: string) {
    const data = await this._translationService.getTranslations(locale);
    if (!data) return;
    const {
      items: [result],
    } = data;
    const {
      fields: { translations },
    } = result;

    // keep only scope specific translations to reduce obj size passed to the page
    // contentful doesn't let to query just some properties of a json type field:
    // if they'll implement the feature, remove this logic and add filtering in the service
    let scopeFilteredTranslations = translations;
    if (this._scope) {
      scopeFilteredTranslations = this._scope.reduce((result, key) => {
        if (this._scope?.includes(key)) {
          result[key] = translations[key];
        }
        return result;
      }, {} as Record<string, object>);
    }

    this._translations = new TranslationsModel(scopeFilteredTranslations);
    return !!this._translations;
  }

  get(translationKey: string, ...args: string[]) {
    return this._translations?.get(translationKey, ...args) || '';
  }

  getAll(): TCommonObject {
    return this._translations?.getAll() || {};
  }

  getAllWithFallback(fallbackTranslations: TCommonObject = {}) {
    const currentTranslations = this.getAll();
    const groups = Object.keys(fallbackTranslations);

    if (groups.length === 0) return currentTranslations;

    groups.map((groupKey: string) => {
      if (!currentTranslations[groupKey]) {
        currentTranslations[groupKey] = fallbackTranslations[groupKey];
      } else {
        const groupItems = Object.keys(fallbackTranslations[groupKey]);

        groupItems.map((groupItemKey: string) => {
          if (!currentTranslations[groupKey][groupItemKey]) {
            currentTranslations[groupKey][groupItemKey] =
              fallbackTranslations[groupKey][groupItemKey];
          }
        });
      }
    });

    return currentTranslations;
  }
}
