import { NextApiRequest, NextApiResponse } from 'next';
import { isValidSFCCRequest } from '@lib/isValidSFCCRequest';
import { ContentfulFooterFactory } from '@factories/ContentfulFooter/ContentfulFooter.factory';
import {
  ERROR_API_NO_LOCALE_CONTEXT,
  ERROR_INTERNAL_API_RESPONSE_FACTORY,
} from '@modules/api/data/header/header';

const getFooterData = async (
  req: NextApiRequest
): Promise<IContentfulFooterModel | TCommonObject> => {
  const {
    query: { locale, absoluteLinks },
  } = req;
  if (!locale) {
    throw new Error(ERROR_API_NO_LOCALE_CONTEXT);
  }
  const isAbsoluteLinks = absoluteLinks === 'true';
  const footerFactoryInstance = new ContentfulFooterFactory(locale as string);
  await footerFactoryInstance.initialize(locale as string, isAbsoluteLinks);
  const data = footerFactoryInstance.getFooterObject();
  if (!data) {
    throw new Error(ERROR_INTERNAL_API_RESPONSE_FACTORY);
  }
  return Promise.resolve(data);
};

const internalResponseHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const footerData = await getFooterData(req);
    return res.status(200).json(footerData);
  } catch (e: Error | any) {
    return res.status(500).json({ error: e.message });
  }
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  return isValidSFCCRequest(req, res, () => internalResponseHandler(req, res));
}
