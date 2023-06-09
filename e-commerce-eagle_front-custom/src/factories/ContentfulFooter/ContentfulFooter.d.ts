interface IContentfulFooterFactory extends IFactory {
  _name?: string;
  _langContext: string;
  _footerService: ContentfulFooterService;
  _contentTypeData?: IRedisContentfulEntryReferenceProps;
  _contentRefFieldsData: Array<ContentfulFooterService>;
  data: TCommonObject;
}

interface IContentfulFooterModel {
  sample: string;

  sampleFunction(): void;
}
