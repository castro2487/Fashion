import { NextApiRequest, NextApiResponse } from 'next';

import { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import { AuthFactory } from '@factories/Auth/Auth.factory';
import { setSFCCCookiesAPISide } from './scripts/setSFCCCookiesAPISide';

const getInternalSession = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<TSessionStatus> => {
  const authFactory = new AuthFactory();
  let sessionStatus: TSessionStatus = 'new';
  let { sessionInfo } = req.session;
  const customerSessionService = new CustomerSessionService();

  sessionInfo = await customerSessionService.getSession(sessionInfo?.usid);

  if (!sessionInfo) {
    sessionStatus = 'invalid';
  } else {
    authFactory.session = sessionInfo as TSessionInfo;
    sessionStatus = 'valid';
    setSFCCCookiesAPISide(req, res, authFactory);
  }

  return Promise.resolve(sessionStatus);
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const status = await getInternalSession(req, res);
  return res.status(200).json({ status });
}
