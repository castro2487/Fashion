export const REG_EX_LOCALE = /([a-z]{2}-[a-z]{2})/;

export const getCountryFromLocale = (countryCode = ''): string => {
  return (
    REG_EX_LOCALE.test(countryCode)
      ? countryCode.split('-')[1] || countryCode
      : countryCode
  ).toUpperCase();
};
