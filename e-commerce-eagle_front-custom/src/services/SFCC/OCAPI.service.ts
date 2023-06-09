import { createOcapiFetch } from './OCAPI.utils';
import { HTTP_METHODS } from '@constants/http';
import { localeModel } from '@lib/global';

class OCAPIService {
  _locale: string;
  _country: ILocaleCountry;
  _fallbackCountry: ILocaleCountry;

  constructor(locale: string) {
    this._locale = locale || process.env.CONFIG_DEFAULT_LOCALE || 'en-us';
    this._country = localeModel.getCountryInfo(this._locale);
    this._fallbackCountry = localeModel.getCountryInfo(this._locale);
  }

  static DEFAULT_OPTIONS(): TOCAPIApiConfig {
    const defaultOptions: TOCAPIApiConfig = {
      clientId: <string>process.env.SFCC_SCAPI_PRIVATE_CLIENT_ID_R1,
      ocapiHost: <string>process.env.SFCC_OCAPI_BASE_URL_R1,
      ocapiVersion: <string>process.env.SFCC_OCAPI_VERSION,
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

  getOCAPIOptions(
    options: TOCAPIApiConfigParams = <TOCAPIApiConfigParams>{}
  ): TOCAPIApiConfig {
    const country = this.getCountryConfig(options?.locale);

    if (country) {
      const clientOptions = {
        ...OCAPIService.DEFAULT_OPTIONS(),
        ...{
          clientId: <string>(
            process.env[`SFCC_SCAPI_PRIVATE_CLIENT_ID_${country.realmId}`]
          ),
          ocapiHost: <string>(
            process.env[`SFCC_OCAPI_BASE_URL_${country.realmId}`]
          ),
          siteId: country.sfccSiteId,
        },
        ...options,
      };

      return clientOptions;
    }

    return {
      ...OCAPIService.DEFAULT_OPTIONS(),
      ...options,
    };
  }

  static getClient(options: TOCAPIApiConfig) {
    return createOcapiFetch(options);
  }

  getOCAPIClient(options?: TOCAPIApiConfigParams) {
    const ocapiClientOptions = this.getOCAPIOptions(options);

    return OCAPIService.getClient(ocapiClientOptions);
  }

  async createSessionBridge(accessToken: string) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const ocapiClient = this.getOCAPIClient({ headers });
    return ocapiClient('/sessions', HTTP_METHODS.POST, { rawResponse: true });
  }
}

export { OCAPIService };
