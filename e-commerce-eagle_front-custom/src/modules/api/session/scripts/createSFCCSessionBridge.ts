import { Cookie } from '@factories/Cookie/Cookie.factory';
import { OCAPIService } from '@services/SFCC/OCAPI.service';

export const createSFCCSessionBridge = async (
  locale: string,
  accessToken: string
) => {
  const ocapiService = new OCAPIService(locale);
  const bridgeInfo = await ocapiService
    .createSessionBridge(accessToken)
    .then((res) => {
      const { dwsid } = Cookie.parseResponseCookieWithSplit(res);
      return {
        dwsid: dwsid?.value || '',
      };
    })
    .catch((err) => {
      console.error('Error: Failed Session BRIDGE CREATION', err);
      return {
        dwsid: '',
      };
    });

  return Promise.resolve(bridgeInfo);
};
