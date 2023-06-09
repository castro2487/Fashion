/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalRef } from '@common/GlobalRef';
import { LocaleModel } from '@factories/Locale/Locale.model';
import rawLocaleConfig from '@config/rawLocaleConf.json';

const setupGlobalLocaleModel = () => {
  const localModel = new LocaleModel({
    config: rawLocaleConfig as any,
  } as ILocaleConfig);

  return localModel;
};

const localeModelInstance = new GlobalRef<LocaleModel>('localeModelInstance');

if (!localeModelInstance.value) {
  localeModelInstance.value = setupGlobalLocaleModel();
}

export const localeModel = localeModelInstance.value;
export const isDevelopment = () => process.env.NODE_ENV === 'development';
export const isProduction = () => process.env.NODE_ENV === 'production';
