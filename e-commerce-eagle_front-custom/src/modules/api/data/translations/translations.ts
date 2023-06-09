import type { NextApiRequest, NextApiResponse } from 'next';
import { TranslationsFactory } from '@factories/Translations/Translations.factory';
import { allowedMethods } from '@lib/utils/backend-only/allowedMethods';
import { THTTPCallbackActions } from '@amq';

const methodActions: THTTPCallbackActions = {
  GET: async (req: NextApiRequest, res: NextApiResponse<TCommonObject>) => {
    const locale = <string>req.query.locale || 'en-fr';
    const translationsFactory = new TranslationsFactory(locale);
    let response: TCommonObject = {};

    await translationsFactory.initialize();

    if (req.query.tkey && req.query.args) {
      response = {
        [locale]: translationsFactory.get(
          <string>req.query.tkey,
          'France',
          'Luxury User'
        ),
      };
    } else if (req.query.tkey) {
      response = {
        [locale]: translationsFactory.get(<string>req.query.tkey),
      };
    } else {
      response = translationsFactory.getAll();
    }

    res.status(200).json(response);
  },
};

export default allowedMethods(methodActions);
