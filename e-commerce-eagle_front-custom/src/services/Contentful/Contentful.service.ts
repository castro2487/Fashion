import { Service } from '@common/Service';
import { RedisService } from '@services/Redis/Redis.service';
import * as Contentful from 'contentful';
import resolveResponse from 'contentful-resolve-response';

// Will be moved into a CacheManager service singleton
const redis = new RedisService();

export const ERROR_LOAD_CONTENTFUL_DELIVERY_API_TOKEN =
  'The ContentfulService cannot load the delivery api token variable from .env file. Check the CONFIG_CONTENTFUL_DELIVERY_API_TOKEN variable in your .env file.';

export const ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN =
  'The ContentfulService cannot load the preview api token variable from .env file. Check the CONFIG_CONTENTFUL_PREVIEW_API_TOKEN variable in your .env file.';

export const ERROR_LOAD_CONTENTFUL_ENVIRONMENT =
  'The ContentfulService cannot load the environment variable from .env file. Check the CONFIG_CONTENTFUL_ENVIRONMENT variable in your .env file.';

export const ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL =
  'The ContentfulService cannot load the Rest API base url variable from .env file. Check the CONFIG_CONTENTFUL_REST_API_BASE_URL variable in your .env file.';

export const ERROR_LOAD_CONTENTFUL_SPACE_ID =
  'The ContentfulService cannot load the space ID variable from .env file. Check the CONFIG_CONTENTFUL_SPACE_ID variable in your .env file.';

export const enum SDK_METHODS {
  GET_ENTRY = 'getEntry',
  GET_ENTRIES = 'getEntries',
  GET_CONTENT_TYPE = 'getContentType',
  GET_CONTENT_TYPES = 'getContentTypes',
}
export class ContentfulService extends Service implements IContentfulService {
  _name = 'ContentfulService';
  _delivery_api_token = '';
  _delivery_rest_api_base_url = '';
  _environment = '';
  _preview_api_token = '';
  _preview_rest_api_base_url = '';
  _space_id = '';
  _cache_expire = 10;
  _clientApiParams = {
    space: '',
    accessToken: '',
    host: '',
    environment: '',
    headers: {},
    resolveLinks: false,
  };
  client: Contentful.ContentfulClientApi | null = null;

  constructor(isPreview?: boolean, headers?: TDataObject<string>) {
    super();
    this._delivery_api_token = this._getEnvValue(
      'CONFIG_CONTENTFUL_DELIVERY_API_TOKEN',
      ERROR_LOAD_CONTENTFUL_DELIVERY_API_TOKEN
    );
    this._delivery_rest_api_base_url = this._getEnvValue(
      'CONFIG_CONTENTFUL_DELIVERY_REST_API_BASE_URL',
      ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL
    );
    this._environment = this._getEnvValue(
      'CONFIG_CONTENTFUL_ENVIRONMENT',
      ERROR_LOAD_CONTENTFUL_ENVIRONMENT
    );
    this._preview_api_token = this._getEnvValue(
      'CONFIG_CONTENTFUL_PREVIEW_API_TOKEN',
      ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN
    );
    this._preview_rest_api_base_url = this._getEnvValue(
      'CONFIG_CONTENTFUL_PREVIEW_REST_API_BASE_URL',
      ERROR_LOAD_CONTENTFUL_REST_API_BASE_URL
    );
    this._space_id = this._getEnvValue(
      'CONFIG_CONTENTFUL_SPACE_ID',
      ERROR_LOAD_CONTENTFUL_SPACE_ID
    );
    this._cache_expire = Number(
      this._getEnvValue('CONFIG_CONTENTFUL_DEFAULT_CACHE_EXPIRE', '10')
    );

    if (!isPreview) {
      this._clientApiParams.accessToken = this._delivery_api_token;
      this._clientApiParams.host = this._delivery_rest_api_base_url;
    } else {
      this._clientApiParams.accessToken = this._preview_api_token;
      this._clientApiParams.host = this._preview_rest_api_base_url;
    }
    if (headers) {
      this._clientApiParams.headers = headers;
    }
    this._clientApiParams.space = this._space_id;
    this._clientApiParams.environment = this._environment;
    this.client = Contentful.createClient(this._clientApiParams);
  }

  _capitalizeLocaleStr(locale: string): string {
    return locale.replace(/.{0,2}$/, function (lastTwoLetters) {
      return lastTwoLetters.toUpperCase();
    });
  }

  // // some API's expect locale in lowercase format other lower and uppercase e.g en-us vs. en-US
  convertToContentfulLocale(locale: string): string {
    return locale.length === 2 ? locale : this._capitalizeLocaleStr(locale);
  }

  private _getDataFromSdk(
    sdkMethodName: string,
    id: string,
    query: TDataObject<string> | undefined
  ) {
    if (!this.client) return null;
    switch (sdkMethodName) {
      case SDK_METHODS.GET_ENTRY:
        return this.client.getEntry(id, query);
      case SDK_METHODS.GET_ENTRIES:
        return this.client.getEntries(query);
      case SDK_METHODS.GET_CONTENT_TYPE:
        return this.client.getContentType(id);
      case SDK_METHODS.GET_CONTENT_TYPES:
        return this.client.getContentTypes(query);
      default:
        return null;
    }
  }

  resolveRawContentfulResponse(
    contentfulEntry: IContentfulEntryReferenceProps | TCommonObject
  ): ContentfulFlattenReferenceFields {
    const { fields } = resolveResponse(contentfulEntry).pop();
    return fields;
  }

  async _redisMiddleware(params: IGetRequestOptions, sdkMethodName: string) {
    if (!params || !this.client) return;

    const {
      expire = this._cache_expire,
      query,
      id = '',
      customCacheKey = null,
      ignoreCache = false,
    } = params;
    const queryParams = new URLSearchParams(query);
    const redisKey = customCacheKey || `${id}_${queryParams}`;
    const cachedData = (await redis.getObject(
      redisKey
    )) as IRedisContentfulEntryReferenceProps;

    if (!cachedData || ignoreCache) {
      try {
        if (process.env.NODE_ENV !== 'test') {
          console.info(`[Cache-Miss]: not available for query {${redisKey}}`);
        }
        const getData = this._getDataFromSdk(sdkMethodName, id, query);
        const response =
          (await getData) as unknown as IRedisContentfulEntryReferenceProps;
        if (response) {
          response.revalidatedAt = new Date().toLocaleString();
          await redis.setWithExpire(redisKey, JSON.stringify(response), expire);
        }
        return response;
      } catch (e: unknown) {
        if (e instanceof Error) {
          throw new Error(e.message, e as Error);
        }
      }
    }

    if (process.env.NODE_ENV !== 'test') {
      console.info(`[Cache-Hit]: Available for query {${redisKey}}`);
    }

    return cachedData;
  }

  getEntry(params: IGetRequestOptions) {
    return this._redisMiddleware(params, SDK_METHODS.GET_ENTRY);
  }

  getEntries(params: IGetRequestOptions) {
    return this._redisMiddleware(params, SDK_METHODS.GET_ENTRIES);
  }

  getContentType(params: IGetRequestOptions) {
    return this._redisMiddleware(params, SDK_METHODS.GET_CONTENT_TYPE);
  }

  getContentTypes(params: IGetRequestOptions) {
    return this._redisMiddleware(params, SDK_METHODS.GET_CONTENT_TYPES);
  }
}
