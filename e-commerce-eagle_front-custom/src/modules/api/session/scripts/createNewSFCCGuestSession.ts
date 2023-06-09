import type { NextApiRequest } from 'next';
import type { AuthFactory } from '@factories/Auth/Auth.factory';
import type { TokenResponse } from '@services/SFCC/SCAPI.service';
import type { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import { SLASCustomerService } from '@services/SFCC/SLASCustomer.service';
import { updateSFCCSessionBridge } from './updateSFCCSessionBridge';

export const createNewSFCCGuestSession = async (
  req: NextApiRequest,
  authFactory: AuthFactory,
  customerSessionService: CustomerSessionService
) => {
  const slasCustomerService = new SLASCustomerService(
    authFactory.sessionRegion
  );
  const tokenResponse: TokenResponse =
    await slasCustomerService.getGuestUserAuthToken(authFactory.usid);

  await updateSFCCSessionBridge(
    tokenResponse,
    req,
    authFactory,
    customerSessionService
  );

  return Promise.resolve();
};
