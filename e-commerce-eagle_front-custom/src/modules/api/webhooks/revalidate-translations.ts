import type { NextApiRequest, NextApiResponse } from 'next';
import { RedisService } from '@services/Redis/Redis.service';
import { TranslationsFactory } from '@factories/Translations/Translations.factory';
import { allowedMethods } from '@lib/utils/backend-only/allowedMethods';
import { WEBOOK_REQUEST_HEADER_KEY } from '@constants/index';
import { THTTPCallbackActions } from '@amq';
import { appConfig } from '@lib/appConfig';

const methodActions: THTTPCallbackActions = {
  POST: async (req: NextApiRequest, res: NextApiResponse<TCommonObject>) => {
    const isApprovedClientId =
      req.headers[WEBOOK_REQUEST_HEADER_KEY] ===
      appConfig.APP.APP_WEBHOOK_BUSTER_CLIENT_ID;
    const locale = req.query.locale || req.body.locale;
    let response: TCommonObject = {
      success: false,
    };

    if (!isApprovedClientId) {
      return res.status(403).end();
    }

    if (!locale) {
      response.message = 'Locale is missing or invalid';
      return res.status(400).json(response);
    }

    const redisService = new RedisService();
    const translationsFactory = new TranslationsFactory(locale);

    await redisService.delete(`translations_${locale}`);
    await translationsFactory.initialize();

    response = {
      success: true,
      invalidation_status: `Invalidated translations for locale: ${locale}`,
      translations: translationsFactory.getAll(),
    };

    res.status(200).json(response);
  },
};

export default allowedMethods(methodActions, ['POST']);
