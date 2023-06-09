import fetch from 'cross-fetch';
import querystring from 'query-string';

export const createSfraFetch = (config: TSFRAApiConfig) => {
  return async (
    endpoint: string,
    method: string,
    args: IRequestArgs,
    methodName: string
  ) => {
    const siteId = config.siteId;
    const locale = config.locale || 'default';
    const queryString = querystring.stringify(args.query || {});

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        ...args?.headers,
      },
      body: args.body
        ? typeof args.body === 'object'
          ? JSON.stringify(args.body)
          : args.body
        : undefined,
    };

    return new Promise((resolve, reject) => {
      fetch(
        `${config.hostname}/on/demandware.store/Sites-${siteId}-Site/${locale}/${endpoint}?${queryString}`,
        options
      )
        .then(async (response) => {
          let result;
          try {
            result = response.json && (await response.json());
          } catch (e) {
            console.error(
              `Error parsing response as json for ${methodName}: `,
              e
            );
            try {
              result = response.text && (await response.text());
            } catch (e) {
              console.error(`Error parsing response as for ${methodName}: `, e);
            }
          }
          !result || result.error || response.status >= 400
            ? reject(result)
            : resolve(result);
        })
        .catch((error) => reject(error));
    });
  };
};
