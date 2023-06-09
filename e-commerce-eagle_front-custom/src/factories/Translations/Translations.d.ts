interface ITranslationsModel {
  _translations: TCommonObject;
  getTranslation(key: string): string;
}

interface ITranslationsFactory extends IFactory {
  readonly _translations: TranslationsModel | undefined;
  readonly _translationService: ContentfulTranslationService;

  initialize(locale?: string);
  get(translationKey: string): string;
  getAll(): TCommonObject;
}
