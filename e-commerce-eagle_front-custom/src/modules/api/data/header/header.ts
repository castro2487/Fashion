import { NextApiRequest, NextApiResponse } from 'next';
import { ContentfulHeaderFactory } from '@factories/ContentfulHeader/ContentfulHeader.factory';
import { isValidSFCCRequest } from '@lib/isValidSFCCRequest';
import { ContentfulHeaderService } from '@services/ContentfulHeader/ContentfulHeader.service';

export const ERROR_API_NO_LOCALE_CONTEXT =
  // eslint-disable-next-line quotes
  "Locale context param is required to provide language-specific header data. The locale query pram example: 'en-us'.";

export const ERROR_INTERNAL_API_RESPONSE_FACTORY =
  'Factory instances associated with this endpoint return invalid data.';

const getHeaderData = async (
  req: NextApiRequest
): Promise<IContentfulHeaderModel | TCommonObject> => {
  const {
    query: { locale, absoluteLinks },
  } = req;
  if (!locale) {
    throw new Error(ERROR_API_NO_LOCALE_CONTEXT);
  }
  // Header component data
  const headerService = new ContentfulHeaderService(locale as string);
  const isAbsoluteLinks = absoluteLinks === 'true';
  const headerContentfulData = await headerService.getHeaderData();
  const { data } = new ContentfulHeaderFactory(
    headerContentfulData,
    isAbsoluteLinks
  );
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
    const headerData = await getHeaderData(req);
    return res.status(200).json(headerData);
  } catch (e: Error | any) {
    return res.status(500).json({ error: e.message });
  }
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  return isValidSFCCRequest(req, res, () => internalResponseHandler(req, res));
}
