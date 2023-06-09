import { LocaleModel } from './Locale.model';
import { LocaleService } from '@services/Locale/Locale.service';
import localesConfig from '@config/rawLocaleConf.json';
import { ContentfulFactory } from '../Contentful/Contentful.factory';

export const ERROR_MAP_COUNTRY_TRANSLATION =
  'Missing country name translation in locale config. Check all translations in Contentful > Config: Locales > Translation of country names list for the country:';

export const ERROR_MAP_REGION_TRANSLATION =
  'Missing region name translation in locale config. Check all translations in Contentful > Config: Locales > Translation of region names list for the region:';

export const ERROR_LOCALE_FACTORY_TRANSLATION =
  'The LocaleFactory translation needs to be initialized to provide asynchronously loaded data use: initializeLocaleTranslation() method to translate.';

export const ERROR_LOCALE_FACTORY_EMPTY_REGIONS_TRANSLATION_LIST =
  'The LocaleFactory regions translation list is empty. Check values in Contentful > Config: Locales > Translation of region names and run initializeLocaleTranslation method.';

export const ERROR_LOCALE_FACTORY_EMPTY_COUNTRY_TRANSLATION_LIST =
  'The LocaleFactory country translation list is empty. Check values in Contentful > Config: Locales > Translation of country names and run initializeLocaleTranslation method.';

export const ERROR_LOAD_CONFIG_LOCALE_RAW_CONFIG_JSON_PATH =
  'The LocaleFactory cannot load the raw config JSON file path from .env file. Check the CONFIG_LOCALE_RAW_CONFIG_JSON_PATH variable in your .env file.';

export class LocaleFactory extends ContentfulFactory implements ILocaleFactory {
  _name = 'LocaleFactory';

  _langContext: string;
  _localeService: LocaleService;
  _cmsLocaleConfigTranslations: ILocaleConfig;
  _translatedLocalesConfig: ILocaleRegion[] | [];

  constructor(langContext: string) {
    super();
    this._langContext = langContext;
    this._localeService = new LocaleService(this._langContext);
    this._cmsLocaleConfigTranslations = {} as ILocaleConfig;
    this._translatedLocalesConfig = [];
  }

  _translateCountryNames(
    regionCountries: ILocaleCountriesDict
  ): ILocaleCountry[] {
    const { countryNames = [] } = this._cmsLocaleConfigTranslations;
    const regionCountriesList: ILocaleCountry[] = Object.keys(
      regionCountries
    ).map((countryCode) => {
      const translation = countryNames.find((countryTranslation: string) => {
        return countryTranslation.includes(`CTY_${countryCode}`);
      });

      if (translation) {
        regionCountries[countryCode].country =
          translation.split('_').pop() || '';
      }

      return regionCountries[countryCode];
    });

    return regionCountriesList;
  }

  _translateRegionNames(region: ILocaleRegionRaw) {
    const { regionNames = [] } = this._cmsLocaleConfigTranslations;

    if (regionNames && regionNames.length > 0) {
      const translation = regionNames.find((regionTranslation: string) =>
        regionTranslation.includes(`REG_${region.regionId}`)
      );

      if (translation) {
        region.regionName = translation.split('_').pop() || '';
      }
    }

    const countriesList = this._translateCountryNames(
      region.countries
    ) as ILocaleCountry[];

    return { ...region, countries: countriesList };
  }

  _translateLocalConfig() {
    return (
      localesConfig?.map((region: unknown) =>
        this._translateRegionNames(region as ILocaleRegionRaw)
      ) || null
    );
  }

  // Returns serialized not translated list of all regions containing a dictionary of countries per region
  getRawLocales() {
    return localesConfig;
  }

  // Returns serialized translated list of all regions containing a list of countries per region
  getTranslatedLocales() {
    if (!this._translatedLocalesConfig) {
      throw new Error(ERROR_LOCALE_FACTORY_TRANSLATION);
    }
    return this.serializeObject(this._translatedLocalesConfig);
  }

  // Returns translated list of all countries for given region
  getAllCountriesByRegion(regionId: string) {
    if (!this._translatedLocalesConfig) {
      throw new Error(ERROR_LOCALE_FACTORY_TRANSLATION);
    }
    const regionCountries =
      this._translatedLocalesConfig.find(
        (region: ILocaleRegion) => region.regionId === regionId
      )?.countries || [];
    return Object.values(regionCountries);
  }

  // Returns a one serialized, specific country data-info object from all locales based on the locale string argument e.g. (fr-fr)
  getCountryInfo(countryCode: string) {
    if (!this._translatedLocalesConfig) {
      throw new Error(ERROR_LOCALE_FACTORY_TRANSLATION);
    }
    let foundCountry: ILocaleCountry | TCommonObject = {};
    this._translatedLocalesConfig.forEach((region: ILocaleRegion) => {
      const { countries }: { countries: ILocaleCountry[] } = region;
      const country = countries.find((country: ILocaleCountry) =>
        country.locales.find((locale) => locale === countryCode)
      );
      if (country) {
        foundCountry = country;
      }
    });
    return this.serializeObject(foundCountry);
  }

  // Load locales config definition with translation and replace backup config
  async initializeLocaleTranslation(lang?: string) {
    if (lang) {
      this._langContext = lang;
      this._localeService = new LocaleService(this._langContext);
    }
    const cmsLocaleConfig = (await this._localeService.getLocales()) as any;
    if (!cmsLocaleConfig) return;
    this._cmsLocaleConfigTranslations = new LocaleModel({
      ...cmsLocaleConfig,
      config: localesConfig,
    }).definition;
    this._translatedLocalesConfig = this._translateLocalConfig();
  }
}
