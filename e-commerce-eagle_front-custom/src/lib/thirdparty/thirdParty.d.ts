type strategyType =
  | 'beforeInteractive'
  | 'afterInteractive'
  | 'lazyOnload'
  | 'worker'
  | undefined;

interface ThirdPartyScript {
  src?: string;
  strategy?: strategyType;
  position?: string;
  'data-domain-script'?: string;
  'data-document-language'?: boolean;
  onLoad?: () => void;
}

type ThirdPartyPostion = 'lazy-footer' | 'head' | 'all';

type TElasticAPMConfig = {
  serviceName: string;
  environment: string;
  serverUrl: string;
};

interface IElasticApm {
  init: (config: TElasticAPMConfig) => unknown;
}

interface Window {
  dataLayer: unknown[];
  OptanonWrapper: () => void;
  elasticApm: IElasticApm;
  SharedEvents: { emit: (event: string) => void };
}
