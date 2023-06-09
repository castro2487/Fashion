import type { NextApiRequest } from 'next';
import type { AuthFactory } from '@factories/Auth/Auth.factory';
import type { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import {
  SLASCustomerService,
  type TokenResponse,
} from '@services/SFCC/SLASCustomer.service';
import { updateSFCCSessionBridge } from './updateSFCCSessionBridge';

export const getExistingSFCCSession = async (
  req: NextApiRequest,
  authFactory: AuthFactory,
  customerSessionService: CustomerSessionService
) => {
  const slasCustomerService = new SLASCustomerService(
    authFactory.sessionRegion
  );
  const { isInvalidRefreshToken, ...tokenResponse }: TokenResponse =
    await slasCustomerService.refreshAccessToken(authFactory.sfccRefreshToken);

  if (isInvalidRefreshToken) {
    return Promise.resolve(false);
  }

  await updateSFCCSessionBridge(
    tokenResponse,
    req,
    authFactory,
    customerSessionService
  );

  return Promise.resolve(true);
};
