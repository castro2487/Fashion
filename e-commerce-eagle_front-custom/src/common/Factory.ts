import { getEnvValue } from '@lib/utils';

export abstract class Factory implements IFactory {
  // TODO: This file will be provided by Core Module (we can move the functions to Core Module once the repo package is available)
  _name = 'Factory';
  _getEnvValue;

  constructor() {
    this._getEnvValue = getEnvValue;
  }

  get name() {
    return this._name;
  }
}
