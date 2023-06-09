import type { NextApiRequest } from 'next';
import type { AuthFactory } from '@factories/Auth/Auth.factory';
import type { TokenResponse } from '@services/SFCC/SCAPI.service';
import type { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import { createSFCCSessionBridge } from './createSFCCSessionBridge';

export const updateSFCCSessionBridge = async (
  {
    usid,
    id_token,
    customer_id,
    enc_user_id,
    access_token,
    refresh_token,
  }: TokenResponse,
  req: NextApiRequest,
  authFactory: AuthFactory,
  customerSessionService: CustomerSessionService
) => {
  const { dwsid } = await createSFCCSessionBridge(
    authFactory.sessionRegion,
    access_token
  );

  const updates: TSessionBaseInfo = {
    usid: usid,
    sfccIdToken: id_token,
    sfccCustomerId: customer_id,
    sfccEncUserId: enc_user_id,
    sfccSessionId: dwsid,
    sfccAccessToken: access_token,
    sfccRefreshToken: refresh_token,
  };

  authFactory.updateUserSession(updates);
  req.session.sessionInfo = authFactory.omitSensisbleInfo();
  await req.session.save();
  await customerSessionService.setSession(
    authFactory.usid,
    authFactory.session
  );

  return Promise.resolve();
};
