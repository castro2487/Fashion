interface IContentfulService extends IService {
  _name: string;
  _delivery_api_token: string;
  _delivery_rest_api_base_url: string;
  _environment: string;
  _preview_api_token: string;
  _preview_rest_api_base_url: string;
  _space_id: string;
  _cache_expire: number;
  _clientApiParams: {
    space: string;
    accessToken: string;
    host: string;
    environment: string;
    headers: TCommonObject;
  };
  _capitalizeLocaleStr(locale: string): string;
  convertToContentfulLocale(locale: string): string;
  _redisMiddleware(
    params: IGetRequestOptions,
    sdkMethodName: string
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
  client: Contentful.ContentfulClientApi | null = null;
  getEntry(
    params: IGetRequestOptions
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
  getEntries(
    params: IGetRequestOptions
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
  getContentType(
    params: IGetRequestOptions
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
  getContentTypes(
    params: IGetRequestOptions
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}

interface IGetRequestOptions extends IGetRequestEndpointDef {
  id?: string;
  expire?: number;
  ignoreCache?: boolean;
  customCacheKey?: string;
  query?: TCommonObject;
}
