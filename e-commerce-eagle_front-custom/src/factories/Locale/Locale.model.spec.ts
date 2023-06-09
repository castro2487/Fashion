import {
  LocaleCountry,
  LocaleModel,
  LocaleRegion,
  ERROR_MESSAGES,
} from './Locale.model';
import { LOCALE_CONFIG_FILE_MOCK } from './__mock__/LocaleConfigMock';

describe('Locale country tests', () => {
  it('should map country definition', () => {
    const countryDef = {
      ...LOCALE_CONFIG_FILE_MOCK[0].countries.FR,
    } as ILocaleCountry;
    const country = new LocaleCountry(countryDef);
    expect(country).toEqual(countryDef);
  });

  it('should throw an error when the country locale value is not correct', () => {
    const definition = {
      country: 'France',
      locales: ['de-fr', 'en-fr', 'fr', 'zh-fr', 'it-fr'],
      currencies: ['EUR', 'GBP'],
      realmId: 'R1',
      sfccSiteId: 'AMQ-WEUR',
    };
    try {
      new LocaleCountry(definition);
    } catch (e: Error | any) {
      expect(e.message).toBe(ERROR_MESSAGES.ERROR_MAP_COUNTRY_LOCALES);
    }
  });

  it('should throw an error when teh country currency value is not correct', () => {
    const definition = {
      country: 'France',
      locales: ['de-fr', 'en-fr', 'fr-fr', 'zh-fr', 'it-fr'],
      currencies: ['EU'],
      realmId: 'R1',
      sfccSiteId: 'AMQ-WEUR',
    };
    try {
      new LocaleCountry(definition);
    } catch (e: Error | any) {
      expect(e.message).toBe(ERROR_MESSAGES.ERROR_MAP_COUNTRY_CURRENCIES);
    }
  });
});

describe('Locale region tests', () => {
  it('should map region definition', () => {
    const regionDef = { ...LOCALE_CONFIG_FILE_MOCK[0] };
    const region = new LocaleRegion(regionDef);
    expect(region).toEqual(regionDef);
  });

  it('should throw an error when the country locale value is not correct', () => {
    const definition = {
      regionId: 'europe',
      regionName: 'Europe',
      realmId: 'R1',
      countries: {
        FR: {
          country: 'France',
          sfccSiteId: 'AMQ-WEUR',
          currencies: ['EUR'],
          realmId: 'R1',
          locales: ['fr-fr', 'en-fr', 'de-fr', 'it-fr'],
        },
      },
    };
    try {
      new LocaleRegion(definition);
    } catch (e: Error | any) {
      expect(e.message).toBe(ERROR_MESSAGES.ERROR_MAP_REGION_COUNTRY);
    }
  });
});

describe('Locale model tests', () => {
  it('should create locale definition object', () => {
    const expected = { config: [...LOCALE_CONFIG_FILE_MOCK] };
    const locale = new LocaleModel(expected).definition;
    expect(locale).toEqual(expected);
  });
});
