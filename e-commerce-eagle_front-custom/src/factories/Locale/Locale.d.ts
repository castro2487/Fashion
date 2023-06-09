interface ILocaleConfig {
  config: ILocaleRegionRaw[];
  countryNames: string[];
  regionNames: string[];
  items?: TCommonObject;
}

type Countries<T> = Array<T>;
type Locales<T> = Array<T>;

type TRealm = 'R1' | 'R2';

interface ILocaleCountry {
  country: string;
  realmId: TRealm;
  regionId: string;
  sfccSiteId: string;
  currencies: string[];
  locales: string[];
}

interface ILocaleCountriesDict {
  [key: string]: ILocaleCountry;
}
interface ILocaleRegionRaw {
  regionId: string;
  regionName: string;
  realmId: TRealm;
  countries: ILocaleCountriesDict;
}
interface ILocaleRegion {
  regionId: string;
  regionName: string;
  realmId: TRealm;
  countries: ILocaleCountry[];
}

interface ILocaleModel {
  definition: ILocaleConfig;

  _mapRegions(regions: ILocaleRegionRaw[]);
  flattenCountries();
  getCountryFromLocale(countryCode = ''): string;
  getCountryInfo(countryCode: string);
}

interface ILocaleFactory extends IFactory {
  readonly _name: string;
  readonly _localeService: LocaleService;
  _langContext: string;
  _cmsLocaleConfigTranslations: ILocaleConfig;
  _translatedLocalesConfig: ILocaleRegion[] | [];
  _translateCountryNames(
    regionCountries: ILocaleCountriesDict
  ): ILocaleCountry[];
  _translateRegionNames(region: ILocaleRegionRaw): ILocaleRegion;
  getAllCountriesByRegion(regionId: string): ILocaleCountry[];
  getCountryInfo(countryCode: string): ILocaleCountry | TCommonObject;
}
