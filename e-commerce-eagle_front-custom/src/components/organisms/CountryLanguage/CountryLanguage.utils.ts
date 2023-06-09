import { LocaleCountryProps, OptionalLanguagesListProps } from '@amq';

const extractLanguageSymbol = (locale: string): string =>
  locale ? locale.slice(0, 2) : '';

export const defineOptionalLanguages = (
  countryDef: LocaleCountryProps
): OptionalLanguagesListProps => {
  return countryDef.locales.map((locale) => {
    const langPrepend = extractLanguageSymbol(locale);
    switch (langPrepend) {
      case 'en':
        return { label: 'English', link: locale };
      case 'fr':
        return { label: 'Français', link: locale };
      case 'zh':
        return { label: '中文', link: locale };
      case 'it':
        return { label: 'Italiano', link: locale };
      case 'de':
        return { label: 'Deutsch', link: locale };
      case 'ko':
        return { label: '한국어', link: locale };
      case 'es':
        return { label: 'Español', link: locale };
      case 'ja':
        return { label: '日本語', link: locale };
    }
  });
};

export const defineCurrentLangSymbol = (locale: string): string => {
  const langPrepend = extractLanguageSymbol(locale);
  return langPrepend.toLocaleUpperCase();
};
