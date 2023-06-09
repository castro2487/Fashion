export const REG_EX_LOCALE = /([a-z]{2}-[a-z]{2})/;

export const getLanguageFromLocale = (locale = ''): string => {
  return REG_EX_LOCALE.test(locale) ? locale.split('-')[0] : 'en';
};
