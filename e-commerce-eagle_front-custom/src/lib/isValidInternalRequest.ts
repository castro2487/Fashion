import { NextApiRequest, NextApiResponse } from 'next';
import { INTERNAL_REQUEST_HEADER_KEY } from '@constants/index';
import { appConfig } from '@lib/appConfig';
import { ERROR_INTERNAL_REQUEST_AUTH } from '@lib/isValidSFCCRequest';

export const isValidInternalRequest = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cb: () => Promise<unknown>
) => {
  const internalToken = appConfig.APP.APP_INTERNAL_REQUEST_TOKEN;
  if (!internalToken) {
    return res.status(500).json({
      statusText: ERROR_INTERNAL_REQUEST_AUTH,
    });
  }

  const headersInternalToken = req.headers[INTERNAL_REQUEST_HEADER_KEY];
  if (headersInternalToken !== internalToken) {
    return res.status(403).json({
      statusText: 'Permission Denied',
    });
  }

  return cb();
};
