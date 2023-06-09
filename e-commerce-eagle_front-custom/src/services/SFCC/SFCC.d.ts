type TOCAPIApiConfig = {
  headers?: TDataObject<string>;
  locale?: string;
  ocapiHost: string;
  ocapiVersion: string;
  clientId: string;
  siteId: string;
  returnRawResponse?: boolean;
};

type TOCAPIApiConfigParams = Omit<
  TOCAPIApiConfig,
  'ocapiHost' | 'ocapiVersion' | 'clientId' | 'siteId'
> & {
  ocapiHost?: string;
  ocapiVersion?: string;
  clientId?: string;
  siteId?: string;
};

type TOCAPIApiError = {
  message: string;
  type: string;
  arguments: TCommonObject;
};

type TOCAPIApiRequestConfig = {
  headers?: TDataObject<string>;
  body?: TCommonObject;
  rawResponse?: boolean;
};

type TSCAPIApiError = {
  title: string;
  type: string;
  detail: string;
  arguments: TCommonObject;
  fault: boolean;
};

type TIntegrationsConfig = {
  sfraApiConfig: SfraApiConfig;
};

type TSFRAApiConfig = {
  headers?: TDataObject<string>;
  hostname: string;
  locale: string;
  siteId: string;
};

type TSFRAApiConfigParams = Omit<
  TSFRAApiConfig,
  'hostname' | 'siteId' | 'locale'
> & {
  hostname?: string;
  locale?: string;
  siteId?: string;
};

type TIntegrationsConfig = {
  sfraApiConfig: SfraApiConfig;
};
