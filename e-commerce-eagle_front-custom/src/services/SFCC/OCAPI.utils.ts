/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'cross-fetch';
import queryString from 'query-string';
import { HTTPError } from '@models/HttpErrors.model';

export const toCamel = (str: string): string => {
  if (str.startsWith('_') || str.startsWith('c_')) {
    return str;
  }
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const isObject = (obj: unknown): boolean => {
  return (
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'
  );
};

export const transformObjectKeysToCamel = (
  obj: TCommonObject
): TCommonObject => {
  if (isObject(obj)) {
    const n: TCommonObject = {};

    Object.keys(obj).forEach((k: string) => {
      n[toCamel(k)] = transformObjectKeysToCamel(obj[k]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i: TCommonObject) => {
      return transformObjectKeysToCamel(i);
    });
  }

  return obj;
};

export const camelCaseKeysToUnderscore = (_obj: TCommonObject) => {
  if (typeof _obj != 'object') return _obj;

  // Copy the incoming object so we dont mutate it
  let obj: TCommonObject;
  if (Array.isArray(_obj)) {
    obj = [..._obj];
  } else {
    obj = { ..._obj };
  }

  for (const oldName in obj) {
    // Ignore custom properties
    if (oldName.substring(0, 2) === 'c_') {
      continue;
    }

    // Camel to underscore
    const newName = oldName.replace(/([A-Z])/g, ($1) => {
      return '_' + $1.toLowerCase();
    });

    // Only process if names are different
    if (newName != oldName) {
      // Check for the old property name to avoid a ReferenceError in strict mode.
      if (Object.prototype.hasOwnProperty.call(obj, oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
    }

    // Recursion
    if (typeof obj[newName] == 'object') {
      obj[newName] = camelCaseKeysToUnderscore(obj[newName]);
    }
  }

  return obj;
};

export const convertOcapiFaultToSCAPIError = (
  error: TOCAPIApiError
): TSCAPIApiError => {
  return {
    title: error.message,
    type: error.type,
    detail: error.message,
    arguments: error.arguments,
    fault: true,
  };
};
// This function is used to interact with the OCAPI API
export const createOcapiFetch = ({
  siteId,
  clientId,
  ocapiHost,
  ocapiVersion,
  returnRawResponse,
  ...config
}: TOCAPIApiConfig) => {
  return async (
    endpoint: string,
    method: THttpMethod,
    args?: TOCAPIApiRequestConfig
  ): Promise<any> => {
    const headers: TCommonObject = {
      'Content-Type': 'application/json',
      'x-dw-client-id': clientId,
      ...config?.headers,
      ...args?.headers,
    };

    const parsedApiUrl = queryString.parseUrl(
      `${ocapiHost}/s/${siteId}/dw/shop/${ocapiVersion}/${endpoint}`
    );

    if (config?.locale) {
      parsedApiUrl.query.locale = config.locale;
    }

    const apiUrl = `${parsedApiUrl.url}?${queryString.stringify(
      parsedApiUrl.query
    )}`;

    let response = await fetch(apiUrl, {
      method: method,
      headers: headers,
      ...(args?.body && {
        body: JSON.stringify(args?.body),
      }),
    });

    const httpStatus = response.status;

    if (args?.rawResponse) {
      return response;
    }

    if (httpStatus === 204) {
      return {
        status: 204,
      };
    }

    if (response.json) {
      response = await response.json();
    }

    const convertedResponse = camelCaseKeysToUnderscore(response);

    if (convertedResponse.fault) {
      const error = convertOcapiFaultToSCAPIError(convertedResponse.fault);

      if (returnRawResponse || args?.rawResponse) {
        return error;
      }

      throw new HTTPError(
        httpStatus,
        error.arguments?.statusMessage || error.detail
      );
    } else {
      return convertedResponse;
    }
  };
};
