import { type ClientConfig } from 'commerce-sdk';
import { type TokenResponse } from 'commerce-sdk/dist/helpers/slasClient';
import { localeModel } from '@lib/global';

class SCAPIService {
  _locale: string;
  _country: ILocaleCountry;
  _fallbackCountry: ILocaleCountry;

  constructor(locale: string) {
    this._locale = locale || process.env.CONFIG_DEFAULT_LOCALE || 'en-us';
    this._country = localeModel.getCountryInfo(this._locale);
    this._fallbackCountry = localeModel.getCountryInfo(this._locale);
  }

  static DEFAULT_OPTIONS(): ClientConfig {
    const defaultOptions: ClientConfig = {
      parameters: {
        clientId: process.env.SFCC_SCAPI_PRIVATE_CLIENT_ID_R1,
        organizationId: process.env.SFCC_SCAPI_ORGANIZATION_ID_R1,
        shortCode: process.env.SFCC_SCAPI_SHORT_CODE_R1,
        siteId: process.env.SFCC_DEFAULT_SITE || 'AMQ-WEUR',
      },
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

  getClientSecret(locale?: string): string {
    const country = this.getCountryConfig(locale);

    return process.env[
      `SFCC_SCAPI_PRIVATE_CLIENT_SECRET_${country.realmId}`
    ] as string;
  }

  getSCAPIClientOptions(options?: ClientConfig, locale?: string) {
    const country = this.getCountryConfig(locale);

    if (country) {
      const clientOptions = {
        ...SCAPIService.DEFAULT_OPTIONS(),
        ...{
          parameters: {
            clientId:
              process.env[`SFCC_SCAPI_PRIVATE_CLIENT_ID_${country.realmId}`],
            organizationId:
              process.env[`SFCC_SCAPI_ORGANIZATION_ID_${country.realmId}`],
            shortCode: process.env[`SFCC_SCAPI_SHORT_CODE_${country.realmId}`],
            siteId: country.sfccSiteId,
          },
        },
        ...options,
      };

      return clientOptions;
    }

    return {
      ...SCAPIService.DEFAULT_OPTIONS(),
      ...options,
    };
  }
}

export { TokenResponse, ClientConfig, SCAPIService };
