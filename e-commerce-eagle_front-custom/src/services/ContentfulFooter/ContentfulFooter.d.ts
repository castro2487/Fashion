interface IContentfulFooterService extends IService {
  _name: string;
  _locale: string;
  getFooterData(): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}
