interface IContentfulHeaderService extends IService {
  _name: string;
  _locale?: string;
  _headerComponentId: string;
  getHeaderData(): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}
