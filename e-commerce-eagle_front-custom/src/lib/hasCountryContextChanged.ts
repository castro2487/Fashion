import { type NextRequest } from 'next/server';
import { getCountryFromLocale, getLanguageFromLocale } from '@lib/utils';

export const hasCountryContextChanged = (req: NextRequest) => {
  const preferredLocale = req.cookies.get('preferred-locale');
  const currentCountry = getCountryFromLocale(preferredLocale?.value);
  const requestCountry = getCountryFromLocale(req.nextUrl.locale);
  const currentLanguage = getLanguageFromLocale(preferredLocale?.value);
  const requestLanguage = getLanguageFromLocale(req.nextUrl.locale);
  const countryContextChanged = currentCountry !== requestCountry;
  const languageContextChanged = currentLanguage !== requestLanguage;

  return { countryContextChanged, languageContextChanged };
};
