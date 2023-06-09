import type { NextApiRequest, NextApiResponse } from 'next';
import { CustomerSessionService } from '@services/CustomerSession/CustomerSession.service';
import { isDevelopment } from '@lib/global';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TCommonObject>
) {
  const usid = req.cookies['usid'];
  const currentLocale = req.cookies['preferred-locale'];
  const customerSessionService = new CustomerSessionService();
  const sessionInfo = await customerSessionService.getSession(usid);

  // TODO: Remove the sessionInfo !!!
  if (isDevelopment()) {
    res.status(200).json({
      ...sessionInfo,
      currentLocale,
    });
    return;
  }

  res.status(200).json({
    info: 'This a demo endpoint, this should not be on PRODUCTION!!!!!',
  });
}
