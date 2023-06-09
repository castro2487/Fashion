import { NextApiRequest, NextApiResponse } from 'next';
import { SFCC_REQUEST_HEADER_KEY } from '@constants/index';
import { appConfig } from '@lib/appConfig';

export const ERROR_INTERNAL_REQUEST_AUTH =
  'Internal request between client and server can not be authorised. Please check auth values.';

export const PERMISSION_DENIED_MESSAGE = 'Permission Denied';

export const isValidSFCCRequest = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cb: () => Promise<unknown>
) => {
  const internalSfccClientId = appConfig.APP.APP_SFCC_REQUEST_CLIENT_ID;

  if (!internalSfccClientId) {
    return res.status(500).json({
      statusText: ERROR_INTERNAL_REQUEST_AUTH,
    });
  }

  const headersSfccClientId = req.headers[SFCC_REQUEST_HEADER_KEY];

  if (headersSfccClientId !== internalSfccClientId) {
    return res.status(403).json({
      statusText: PERMISSION_DENIED_MESSAGE,
    });
  }

  return cb();
};
