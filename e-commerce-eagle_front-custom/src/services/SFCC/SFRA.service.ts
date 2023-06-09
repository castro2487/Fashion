import { localeModel } from '@lib/global';
import { createSfraFetch } from './SFRA.utils';

class SFRAService {
  _locale: string;
  _country: ILocaleCountry;
  _fallbackCountry: ILocaleCountry;

  constructor(locale: string) {
    this._locale = locale || process.env.CONFIG_DEFAULT_LOCALE || 'en-us';
    this._country = localeModel.getCountryInfo(this._locale);
    this._fallbackCountry = localeModel.getCountryInfo(this._locale);
  }

  static DEFAULT_OPTIONS(): TSFRAApiConfig {
    const defaultOptions: TSFRAApiConfig = {
      hostname: <string>process.env.SFCC_SFRA_BASE_URL_R1,
      locale: <string>process.env.CONFIG_DEFAULT_LOCALE,
      siteId: <string>process.env.SFCC_DEFAULT_SITE || 'AMQ-WEUR',
    };

    return defaultOptions;
  }

  get country(): ILocaleCountry {
    return this._country || this.fallbackCountry;
  }

  get fallbackCountry(): ILocaleCountry {
    return this._fallbackCountry;
  }

  getCountryConfig(locale?: string): ILocaleCountry {
    if (!locale) {
      return this.country || this.fallbackCountry;
    }

    const country: ILocaleCountry = localeModel.getCountryInfo(locale);

    return country;
  }

  getSFRAOptions(
    options: TSFRAApiConfigParams = <TSFRAApiConfigParams>{}
  ): TSFRAApiConfig {
    const country = this.getCountryConfig(options?.locale);

    if (country) {
      const clientOptions = {
        ...SFRAService.DEFAULT_OPTIONS(),
        ...{
          hostname: <string>(
            process.env[`SFCC_SFRA_BASE_URL_${country.realmId}`]
          ),
          siteId: country.sfccSiteId,
        },
        ...options,
      };

      return clientOptions;
    }

    return {
      ...SFRAService.DEFAULT_OPTIONS(),
      ...options,
    };
  }

  static getClient(options: TSFRAApiConfig) {
    return createSfraFetch(options);
  }

  getSFRAClient(options?: TSFRAApiConfigParams) {
    const sfraClientOptions = this.getSFRAOptions(options);
    return SFRAService.getClient(sfraClientOptions);
  }
}

export { SFRAService };
