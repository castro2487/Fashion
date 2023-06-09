export const elasticApmLoad = () => {
  const elasticConfig = {
    serverUrl: process.env.NEXT_PUBLIC_ELASTIC_APM_URL as string,
    environment: process.env.NEXT_PUBLIC_ELASTIC_APM_ENVIRONMENT as string,
    serviceName: process.env.NEXT_PUBLIC_ELASTIC_APM_SERVICE_NAME as string,
  };

  window.elasticApm.init(elasticConfig);
};

export const elasticApmScript: TCommonObject = {
  src: '/vendor/elastic-apm-rum.umd.min.js',
  strategy: 'afterInteractive',
  onLoad: elasticApmLoad,
  crossOrigin: 'anonymous',
};
