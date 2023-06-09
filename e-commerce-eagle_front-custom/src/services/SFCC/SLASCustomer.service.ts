import { Customer, slasHelpers } from 'commerce-sdk';
import {
  type TokenResponse,
  SCAPIService,
  ClientConfig,
} from './SCAPI.service';

class SLASCustomerService extends SCAPIService {
  constructor(locale: string) {
    super(locale);
  }

  /**
   * Get the shopper or guest JWT/access token, along with a refresh token
   */
  async getGuestUserAuthToken(
    usid?: string,
    options?: ClientConfig
  ): Promise<TokenResponse> {
    const loginGuestUserPrivate = slasHelpers.loginGuestUserPrivate;
    const scapiOptions = this.getSCAPIClientOptions(options);
    const slasClient = new Customer.ShopperLogin({
      ...scapiOptions,
    });

    const tokenInfo = await loginGuestUserPrivate(
      slasClient,
      {
        clientSecret: this.getClientSecret(),
      },
      usid
    ).catch((error) => {
      console.error('Error fetching token for guest login: ', error);
      return {};
    });

    return tokenInfo as TokenResponse;
  }

  /**
   * Get the shopper or guest JWT/access token, based on the given refresh token
   */
  async refreshAccessToken(
    refreshToken: string,
    options?: ClientConfig
  ): Promise<TokenResponse> {
    const refreshAccessTokenPrivate = slasHelpers.refreshAccessTokenPrivate;
    const scapiOptions = this.getSCAPIClientOptions(options);
    const slasClient = new Customer.ShopperLogin({
      ...scapiOptions,
      ...options,
    });

    const tokenInfo = await refreshAccessTokenPrivate(
      slasClient,
      {
        clientSecret: this.getClientSecret(),
      },
      {
        refreshToken,
      }
    ).catch((error) => {
      console.error('Error refreshing token for session: ', error);
      return {
        isInvalidRefreshToken: true,
      };
    });

    return tokenInfo as TokenResponse;
  }
}

export { TokenResponse, SLASCustomerService };
