import { getLanguageFromLocale } from './getLanguageFromLocale';

describe('getLanguageFromLocale tests', () => {
  it('should return default languge "en"', () => {
    expect(getLanguageFromLocale()).toBe('en');
  });

  it('should return default languge "fr"', () => {
    expect(getLanguageFromLocale('fr-fr')).toBe('fr');
  });

  it('should return default languge "en"', () => {
    expect(getLanguageFromLocale('de-DE')).toBe('en');
  });
});
