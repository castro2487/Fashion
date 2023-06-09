export class TranslationsModel implements ITranslationsModel {
  _translations: TCommonObject;

  constructor(translations: TCommonObject) {
    this._translations = translations;
  }

  get translations() {
    return this._translations;
  }

  getTranslation(key: string): string {
    if (!key || !this.translations) return '';

    const sections = key.split('.');

    if (sections.length === 2 && this.translations[sections[0]]) {
      return this.translations[sections[0]][sections[1]] || key;
    }

    return this.translations[key] || key;
  }

  get(translationKey: string, ...args: string[]) {
    const translationValue = this.getTranslation(translationKey) || '';
    const totalArgs = args?.length || 0;

    if (
      totalArgs > 0 &&
      typeof translationValue === 'string' &&
      translationValue !== ''
    ) {
      return args.reduce(
        (t, arg: string, argPosition: number) =>
          t.replace(`{${argPosition}}`, arg),
        translationValue
      );
    }

    return translationValue;
  }

  getAll(): TCommonObject {
    return this.translations || {};
  }
}
