import {
  ERROR_LOCALE_FACTORY_EMPTY_COUNTRY_TRANSLATION_LIST,
  ERROR_LOCALE_FACTORY_EMPTY_REGIONS_TRANSLATION_LIST,
  ERROR_LOCALE_FACTORY_TRANSLATION,
  ERROR_MAP_COUNTRY_TRANSLATION,
  ERROR_MAP_REGION_TRANSLATION,
  LocaleFactory,
} from './Locale.factory';
import { LocaleService } from '@services/Locale/Locale.service';
import {
  LOCALE_CONFIG_FILE_MOCK,
  LOCALE_CONFIG_RESPONSE_MOCK,
} from './__mock__/LocaleConfigMock';

jest.mock('@services/Locale/Locale.service');
const MockedLocaleService = LocaleService as jest.Mock<any, any, any>;

describe('Locale factory tests', () => {
  const processEnvBackup = { ...process.env };

  afterAll(() => {
    process.env = { ...processEnvBackup }; // Restore old environment
    jest.resetModules();
  });

  beforeAll(() => {
    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => LOCALE_CONFIG_RESPONSE_MOCK,
      };
    });
  });

  it('should initialize with raw locale configuration', () => {
    const expected = [...LOCALE_CONFIG_FILE_MOCK];
    const locale = 'fr';
    const factoryInstance = new LocaleFactory(locale);
    const rawLocales = factoryInstance.getRawLocales();
    expect(rawLocales).toEqual(expected);
  });

  it('should translate region and country names', async () => {
    const expected = [
      {
        regionId: 'europe',
        realmId: 'R1',
        regionName: 'Europe',
        countries: [
          {
            country: 'Autriche',
            currencies: ['EUR'],
            locales: ['de-at', 'en-at', 'fr-at', 'zh-at'],
            realmId: 'R1',
            sfccSiteId: 'AMQ-WEUR',
          },
          {
            country: 'Belgique',
            currencies: ['EUR'],
            locales: ['en-be', 'fr-be', 'zh-be'],
            realmId: 'R1',
            sfccSiteId: 'AMQ-WEUR',
          },
          {
            country: 'Danemark',
            currencies: ['EUR'],
            locales: ['en-dk', 'zh-dk'],
            realmId: 'R1',
            sfccSiteId: 'AMQ-WEUR',
          },
          {
            country: 'France',
            currencies: ['EUR'],
            locales: ['en-fr', 'fr-fr', 'zh-fr'],
            realmId: 'R1',
            sfccSiteId: 'AMQ-WEUR',
          },
        ],
      },
      {
        regionId: 'south-america',
        realmId: 'R1',
        regionName: 'Amérique du Sud',
        countries: [
          {
            country: 'Mexique',
            currencies: ['EUR'],
            locales: ['en-mx'],
            realmId: 'R1',
            sfccSiteId: 'AMQ-SOAM',
          },
        ],
      },
      {
        regionId: 'oceania',
        realmId: 'R2',
        regionName: 'Océanie',
        countries: [
          {
            country: 'Australie',
            locales: ['zh-au', 'en-au'],
            currencies: ['AUD'],
            realmId: 'R2',
            sfccSiteId: 'AMQ-APAC',
          },
        ],
      },
      {
        regionId: 'asia',
        realmId: 'R2',
        regionName: 'Asie',
        countries: [
          {
            country: 'Japon',
            locales: ['zh-jp', 'en-jp', 'ja-jp'],
            currencies: ['YEN'],
            realmId: 'R2',
            sfccSiteId: 'AMQ-JAPN',
          },
        ],
      },
    ];
    const locale = 'fr-fr';
    const factoryInstance = new LocaleFactory(locale);
    await factoryInstance.initializeLocaleTranslation();
    const translated = factoryInstance.getTranslatedLocales();
    expect(translated[2]).toEqual(expected[2]);
  });

  it('should throw an error when region config translation is missing', async () => {
    const missingRegionMock = {
      config: [
        {
          regionId: 'europe',
          realmId: 'R1',
          regionName: 'Europe',
          countries: {
            CH: {
              country: 'Switzerland',
              currencies: ['EUR'],
              locales: ['de-ch', 'en-ch', 'fr-ch', 'zh-ch'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
            FR: {
              country: 'France',
              currencies: ['EUR'],
              locales: ['en-fr', 'fr-fr', 'zh-fr'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
          },
        },
      ],
      countryNames: ['CTY_FR_France', 'CTY_CH_Suisse'],
      regionNames: ['REG_middleEast_Moyent-Orient'],
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => missingRegionMock,
      };
    });

    try {
      const locale = 'en-us';
      const factoryInstance = new LocaleFactory(locale);
      await factoryInstance.initializeLocaleTranslation();
    } catch (e: Error | any) {
      expect(e.message).toBe(`${ERROR_MAP_REGION_TRANSLATION}: europe.`);
    }
  });

  it('should throw an error when country config translation is missing', async () => {
    const missingRegionMock = {
      config: [
        {
          regionId: 'europe',
          realmId: 'R1',
          regionName: 'Europe',
          countries: {
            CH: {
              country: 'Switzerland',
              currencies: ['EUR'],
              locales: ['de-ch', 'en-ch', 'fr-ch', 'zh-ch'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
            FR: {
              country: 'France',
              currencies: ['EUR'],
              locales: ['en-fr', 'fr-fr', 'zh-fr'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
          },
        },
      ],
      countryNames: ['CTY_CH_Suisse'],
      regionNames: ['REG_europe_Europe'],
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => missingRegionMock,
      };
    });

    try {
      const locale = 'fr';
      const factoryInstance = new LocaleFactory(locale);
      await factoryInstance.initializeLocaleTranslation();
    } catch (e: Error | any) {
      expect(e.message).toBe(`${ERROR_MAP_COUNTRY_TRANSLATION} FR.`);
    }
  });

  it('should throw an error when country config translation list is empty', async () => {
    const missingRegionMock = {
      config: [
        {
          regionId: 'europe',
          realmId: 'R1',
          regionName: 'Europe',
          countries: {
            CH: {
              country: 'Switzerland',
              currencies: ['EUR'],
              locales: ['de-ch', 'en-ch', 'fr-ch', 'zh-ch'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
            FR: {
              country: 'France',
              currencies: ['EUR'],
              locales: ['en-fr', 'fr-fr', 'zh-fr'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
          },
        },
      ],
      countryNames: [''],
      regionNames: ['REG_europe_Europe'],
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => missingRegionMock,
      };
    });

    try {
      const locale = 'fr-fr';
      const factoryInstance = new LocaleFactory(locale);
      await factoryInstance._translateCountryNames({} as ILocaleCountriesDict);
    } catch (e: Error | any) {
      expect(e.message).toBe(
        ERROR_LOCALE_FACTORY_EMPTY_COUNTRY_TRANSLATION_LIST
      );
    }
  });

  it('should throw an error when region config translation is missing', async () => {
    const missingRegionMock = {
      config: [
        {
          regionId: 'europe',
          realmId: 'R1',
          regionName: 'Europe',
          countries: {
            CH: {
              country: 'Switzerland',
              currencies: ['EUR'],
              locales: ['de-ch', 'en-ch', 'fr-ch', 'zh-ch'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
            FR: {
              country: 'France',
              currencies: ['EUR'],
              locales: ['en-fr', 'fr-fr', 'zh-fr'],
              realmId: 'R1',
              sfccSiteId: 'AMQ-WEUR',
            },
          },
        },
      ],
      countryNames: ['CTY_CH_Suisse'],
      regionNames: [],
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => missingRegionMock,
      };
    });

    try {
      const locale = 'fr-fr';
      const factoryInstance = new LocaleFactory(locale);
      const region = {
        countries: {
          AU: {
            country: 'Australia',
            currencies: ['AUD'],
            locales: ['zh-AU', 'en-AU'],
            realmId: 'R2',
            sfccSiteId: 'AMQ-APAC',
          },
        },
        realmId: 'R2',
        regionId: 'oceania',
        regionName: 'Oceania',
      };
      await factoryInstance._translateRegionNames(region as any);
    } catch (e: Error | any) {
      expect(e.message).toBe(
        ERROR_LOCALE_FACTORY_EMPTY_REGIONS_TRANSLATION_LIST
      );
    }
  });

  it('should create translated locales definition', async () => {
    const partialLocalesMock = {
      config: [
        {
          countries: {
            AU: {
              country: 'Australia',
              currencies: ['AUD'],
              locales: ['zh-au', 'en-au'],
              realmId: 'R2',
              sfccSiteId: 'AMQ-APAC',
            },
          },
          realmId: 'R2',
          regionId: 'oceania',
          regionName: 'Oceania',
        },
      ],
      countryNames: ['CTY_AU_Australie'],
      regionNames: ['REG_oceania_Océanie'],
    };

    const expected = [
      {
        countries: [
          {
            country: 'Australie',
            currencies: ['AUD'],
            locales: ['zh-au', 'en-au'],
            realmId: 'R2',
            sfccSiteId: 'AMQ-APAC',
          },
        ],
        realmId: 'R2',
        regionId: 'oceania',
        regionName: 'Océanie',
      },
    ];

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => partialLocalesMock,
      };
    }) as any;

    const locale = 'fr-fr';
    const factoryInstance = new LocaleFactory(locale);
    await factoryInstance.initializeLocaleTranslation();
    const translatedLocales = factoryInstance.getTranslatedLocales();
    expect(translatedLocales[2]).toEqual(expected[0]);
  });

  it('should return all translated countries per region', async () => {
    const expected = [
      {
        country: 'Australie',
        currencies: ['AUD'],
        locales: ['zh-au', 'en-au'],
        realmId: 'R2',
        sfccSiteId: 'AMQ-APAC',
      },
    ];

    const locale = 'fr';
    const factoryInstance = new LocaleFactory(locale);
    await factoryInstance.initializeLocaleTranslation();
    expect(factoryInstance.getAllCountriesByRegion('oceania')).toEqual(
      expected
    );
  });

  it('should throw an error when can not return all translated countries by region', () => {
    const locale = 'fr';
    const factoryInstance = new LocaleFactory(locale);
    try {
      factoryInstance.getAllCountriesByRegion('europe');
    } catch (e: any) {
      expect(e.message).toBe(ERROR_LOCALE_FACTORY_TRANSLATION);
    }
  });

  it('should throw an error when can not return translated country info', () => {
    const locale = 'fr-fr';
    const factoryInstance = new LocaleFactory(locale);
    try {
      factoryInstance.getCountryInfo('FR');
    } catch (e: any) {
      expect(e.message).toBe(ERROR_LOCALE_FACTORY_TRANSLATION);
    }
  });

  it('should return translated country info', async () => {
    const expected = {
      country: 'France',
      locales: ['en-fr', 'fr-fr', 'zh-fr'],
      currencies: ['EUR'],
      realmId: 'R1',
      sfccSiteId: 'AMQ-WEUR',
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => LOCALE_CONFIG_RESPONSE_MOCK,
      };
    });

    const locale = 'fr-fr';
    const factoryInstance = new LocaleFactory(locale);
    await factoryInstance.initializeLocaleTranslation();
    expect(factoryInstance.getCountryInfo(locale)).toEqual(expected);
  });

  it('should reinitialize translation', async () => {
    const expected = {
      country: 'Danemark',
      locales: ['en-dk', 'zh-dk'],
      currencies: ['EUR'],
      realmId: 'R1',
      sfccSiteId: 'AMQ-WEUR',
    };

    MockedLocaleService.mockImplementation(() => {
      return {
        getLocales: () => LOCALE_CONFIG_RESPONSE_MOCK,
      };
    });

    const locale = 'fr-fr';
    const factoryInstance = new LocaleFactory(locale);
    const newLocale = 'en-dk';
    await factoryInstance.initializeLocaleTranslation(newLocale);
    expect(factoryInstance.getCountryInfo(newLocale)).toEqual(expected);
  });
});
