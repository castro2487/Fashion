import { getEnvValue } from '@lib/utils';

export abstract class Service implements IService {
  // TODO: This file will be provided by Core Module (we can move the functions to Core Module once the repo package is available)
  _name = 'Service Name';
  _getEnvValue;

  get name() {
    return this._name;
  }

  constructor() {
    this._getEnvValue = getEnvValue;
  }

  protected get(endpointUrl: string, options?: RequestInit) {
    return this._request({
      ...options,
      endpointUrl,
      method: 'GET',
    });
  }

  async _request(options: FetchOptions) {
    const { endpointUrl, ...config } = options;
    const resp = await fetch(endpointUrl, config);

    if (!resp.ok) {
      throw new Error(`${resp.status} ${resp.statusText}`, {
        cause: Error.name,
      });
    }

    return resp;
  }
}
