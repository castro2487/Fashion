import { INTERNAL_REQUEST_HEADER_KEY } from '@constants/index';
import { appConfig } from '@lib/appConfig';
import { httpPost } from './utils';

export async function internalRequestPost(url: string, data: TCommonObject) {
  const headers: TCommonObject = {};

  headers[INTERNAL_REQUEST_HEADER_KEY] =
    appConfig.APP.APP_INTERNAL_REQUEST_TOKEN;
  return httpPost(`${appConfig.APP.ORIGIN}${url}`, data, headers);
}
