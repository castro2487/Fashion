interface IContentfulDynamicComponentService extends IContentfulService {
  _name: string;
  _locale: string;
  getComponentData(): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}
