/** @type {import('@factories/Locale/Locale.model').LocaleModel} */

interface IFactory {
  readonly _name: string;
}

interface FetchOptions extends RequestInit {
  endpointUrl: string;
}

interface IService {
  readonly _name: string;

  private _getEnvValue(variableName: string, errorMessage: string): string;
}

type TProcessEnvValue<T> = () => T;

type TString = string | undefined;
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: TString;
  }
}

type TAppConfig = {
  APP: {
    ORIGIN: TString;
    APP_HEALTH_CLIENT_ID: TString;
    APP_SFCC_REQUEST_CLIENT_ID: TString;
    APP_INTERNAL_REQUEST_TOKEN: TString;
    APP_WEBHOOK_BUSTER_CLIENT_ID: TString;
  };
};
