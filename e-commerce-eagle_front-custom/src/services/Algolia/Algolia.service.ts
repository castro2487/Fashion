import { Service } from '@common/Service';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite';

export const ERROR_LOAD_ALGOLIA_APPLICATION_ID =
  'The AlgoliaService cannot load the application ID variable from .env file. Check the CONFIG_ALGOLIA_APPLICATION_ID variable in your .env file.';

export const ERROR_LOAD_ALGOLIA_ADMIN_API_KEY =
  'The Contentful Service cannot load the graphql variable from .env file. Check the CONFIG_ALGOLIA_ADMIN_API_KEY variable in your .env file.';

export class AlgoliaService extends Service implements IAlgoliaService {
  _name = 'AlgoliaService';
  _applicationID?: string;
  _adminAPIKey?: string;
  _searchClient?: SearchClient;
  index?: SearchIndex;

  constructor(indexName: string) {
    super();
    this._applicationID = this._getEnvValue(
      'CONFIG_ALGOLIA_APPLICATION_ID',
      ERROR_LOAD_ALGOLIA_APPLICATION_ID
    );
    this._adminAPIKey = this._getEnvValue(
      'CONFIG_ALGOLIA_ADMIN_API_KEY',
      ERROR_LOAD_ALGOLIA_ADMIN_API_KEY
    );
    this._searchClient = algoliasearch(this._applicationID, this._adminAPIKey);
    this.index = this._searchClient.initIndex(indexName);
  }
}
