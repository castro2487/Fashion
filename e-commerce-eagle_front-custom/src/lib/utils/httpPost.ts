import { HTTP_METHODS } from '@constants/http';

export async function httpPost(
  url: string,
  data: TCommonObject,
  headers: HeadersInit = {}
) {
  return fetch(url, {
    headers,
    method: HTTP_METHODS.POST,
    body: (data && JSON.stringify(data)) || '',
  });
}
