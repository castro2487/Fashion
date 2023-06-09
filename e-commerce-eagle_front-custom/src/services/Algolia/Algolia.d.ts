interface IAlgoliaService extends IService {
  _sampleName?: string;
  _applicationID?: string;
  _adminAPIKey?: string;
  _searchClient?: SearchClient;
  index?: SearchIndex;
}
