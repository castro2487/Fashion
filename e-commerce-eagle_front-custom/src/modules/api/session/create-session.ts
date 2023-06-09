import { NextApiRequest, NextApiResponse } from 'next';

import { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import { AuthFactory } from '@factories/Auth/Auth.factory';
import { parseJson } from '@lib/utils';
import { isValidInternalRequest } from '@lib/isValidInternalRequest';
import { getExistingSFCCSession } from './scripts/getExistingSFCCSession';
import { createNewSFCCGuestSession } from './scripts/createNewSFCCGuestSession';
import { setSFCCCookiesAPISide } from './scripts/setSFCCCookiesAPISide';

const getOrCreateInternalSession = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<TSessionStatus> => {
  const authFactory = new AuthFactory();
  const customerSessionService = new CustomerSessionService();
  let sessionStatus: TSessionStatus = 'new';
  let { sessionInfo } = req.session;
  let isSFCCSessionValid = false;

  const {
    usid = sessionInfo?.usid || '',
    sfccRefreshToken = undefined,
    sfccSessionType = undefined,
    sessionRegion = req.query.locale || 'en-fr',
  } = parseJson(req.body);

  sessionInfo = await customerSessionService.getSession(usid);

  // Local Session doesn't exist or
  // Exisiting Session "guest" / "authenticated" doesn't match the new SFCC session state
  if (!sessionInfo || sessionInfo.sfccSessionType === sfccSessionType) {
    authFactory.createSession({
      usid,
      sessionRegion,
      sfccRefreshToken: sfccRefreshToken,
      isAuthenticated: sfccSessionType === AuthFactory.AUTHENTICATED,
    });

    if (sfccRefreshToken) {
      // This covers the GUEST & AUTHENTICATED secenarios
      // Customer arrives back from the SFCC Shop as Guest or Authenticated user
      isSFCCSessionValid = await getExistingSFCCSession(
        req,
        authFactory,
        customerSessionService
      );
    }

    if (!isSFCCSessionValid && !sfccRefreshToken) {
      // This covers the GUEST scenario only
      // Customer arrives directly on the Custom Front Shop
      await createNewSFCCGuestSession(req, authFactory, customerSessionService);
    }
  } else {
    authFactory.session = sessionInfo as TSessionInfo;
    sessionStatus = 'valid';
  }

  setSFCCCookiesAPISide(req, res, authFactory);
  return Promise.resolve(sessionStatus);
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  return isValidInternalRequest(req, res, async () => {
    const status = await getOrCreateInternalSession(req, res);
    return res.status(200).json({ status });
  });
}
