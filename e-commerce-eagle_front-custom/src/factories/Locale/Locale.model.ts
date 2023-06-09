// Models
// Model - Locales
export const ERROR_MESSAGES = {
  ERROR_MAP_COUNTRY_LOCALES:
    'Incorrect incoming country locale value. Expected format example: `fr-fr`. Check values in locale configuration.',
  ERROR_MAP_COUNTRY_CURRENCIES:
    'Incorrect incoming country currency value. Expected format example: `EUR`. Check values in locale configuration.',
  ERROR_MAP_REGION_COUNTRY:
    'Incorrect incoming region country key. Expected format example: `fr`. Check country keys in locale configuration.',
};

export const REG_EX_LOCALE = /([a-z]{2}-[a-z]{2})/;

export class LocaleCountry implements ILocaleCountry {
  country: string;
  realmId: TRealm;
  regionId: string;
  sfccSiteId: string;
  currencies: Array<string>;
  locales: Array<string>;

  constructor(countryDef: ILocaleCountry) {
    this.country = countryDef.country;
    this.realmId = countryDef.realmId;
    this.regionId = countryDef.regionId;
    this.sfccSiteId = countryDef.sfccSiteId;
    this.currencies = this._mapCurrencies(countryDef.currencies);
    this.locales = this._mapLocales(countryDef.locales);
  }

  _mapCurrencies(currencies: Array<string>) {
    return currencies.map((currency: string) => {
      const regex = new RegExp('^[A-Z]{3}$');
      if (regex.test(currency)) {
        return currency;
      }
      throw new Error(ERROR_MESSAGES.ERROR_MAP_COUNTRY_CURRENCIES);
    });
  }

  _mapLocales(locales: Array<string>) {
    return locales.map((locale: string) => {
      const regex = new RegExp('^[a-z]{2}-[a-z]{2}$');
      if (regex.test(locale)) {
        return locale;
      }
      throw new Error(ERROR_MESSAGES.ERROR_MAP_COUNTRY_LOCALES);
    });
  }
}

export class LocaleRegion implements ILocaleRegionRaw {
  regionId: string;
  regionName: string;
  realmId: TRealm;
  countries: {
    [key: string]: ILocaleCountry;
  };

  constructor(region: ILocaleRegionRaw) {
    this.regionId = region.regionId;
    this.regionName = region.regionName;
    this.realmId = region.realmId;
    this.countries = this._mapCountries(region.countries);
  }

  _mapCountries(countries: { [key: string]: ILocaleCountry }) {
    let mappedCountries = {};
    Object.entries(countries).forEach(([countryCode, countryDef]) => {
      const regex = new RegExp('^[A-Z]{2}$');
      if (!regex.test(countryCode)) {
        throw new Error(ERROR_MESSAGES.ERROR_MAP_REGION_COUNTRY);
      }
      mappedCountries = {
        ...mappedCountries,
        [countryCode]: { ...new LocaleCountry(countryDef) },
      };
    });
    return mappedCountries;
  }
}

export class LocaleModel implements ILocaleModel {
  definition: ILocaleConfig;
  flatMap: Map<string, ILocaleCountry>;

  constructor(localeConfig: ILocaleConfig) {
    let regionNames, countryNames, config;

    if (localeConfig.items) {
      ({ regionNames, countryNames, config } = localeConfig.items[0].fields);
    } else {
      ({ regionNames, countryNames, config } = localeConfig);
    }

    const mappedRegions = this._mapRegions(config);

    this.flatMap = new Map();
    this.definition = { regionNames, countryNames, config: mappedRegions };
    this.flattenCountries();
  }

  _mapRegions(regions: ILocaleRegionRaw[]) {
    return regions.map((region: ILocaleRegionRaw) => ({
      ...new LocaleRegion(region),
    }));
  }

  flattenCountries() {
    if (this.definition) {
      this.definition.config.forEach((region: ILocaleRegionRaw) => {
        Object.keys(region.countries).map((code) =>
          this.flatMap.set(code, region.countries[code])
        );
      });
    }
  }

  getCountryFromLocale(countryCode = ''): string {
    return (
      REG_EX_LOCALE.test(countryCode)
        ? countryCode.split('-').pop() || countryCode
        : countryCode
    ).toUpperCase();
  }

  getCountryInfo(countryCode: string): ILocaleCountry {
    const searchKey = this.getCountryFromLocale(countryCode);
    const countryInfo = this.flatMap.get(searchKey);

    if (!countryInfo) {
      // handle fallback country?
    }

    return countryInfo as ILocaleCountry;
  }
}
