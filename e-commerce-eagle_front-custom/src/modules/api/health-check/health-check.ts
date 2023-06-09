import os from 'os';
import type { NextApiRequest, NextApiResponse } from 'next';
import { RedisService } from '@services/Redis/Redis.service';
import { allowedMethods } from '@lib/utils/backend-only/allowedMethods';
import { localeModel } from '@lib/global';
import { getEnvValue } from '@lib/utils';
import { appConfig } from '@lib/appConfig';
import { HEALTH_REQUEST_HEADER_KEY } from '@constants/index';
import { THTTPCallbackActions } from '@amq';

const methodActions: THTTPCallbackActions = {
  GET: async (req: NextApiRequest, res: NextApiResponse<TCommonObject>) => {
    const isApprovedClientId =
      req.headers[HEALTH_REQUEST_HEADER_KEY] ===
      appConfig.APP.APP_HEALTH_CLIENT_ID;
    let response: TCommonObject = {
      health: 'ok',
    };

    if (isApprovedClientId) {
      const redisService = new RedisService();
      const redisStatus = await redisService.getHealthStatus();
      const upTime = Math.round(os.uptime() / 60 / 60);
      const [load1min, load5mins, load15mins] = os.loadavg();
      const activeLocales = JSON.parse(getEnvValue('CONFIG_LOCALES_LIST'));

      response = {
        ...response,
        redis: redisStatus,

        system: {
          load1min,
          load5mins,
          load15mins,
          uptime:
            upTime > 60
              ? `${Math.round(upTime / 60)} hour(s)`
              : `${upTime} min(s)`,
          totalmem: os.totalmem(),
          freemem: os.freemem(),
        },
        routing: {
          totalActiveLocales: activeLocales.length,
          activeLocales,
        },
        locales: {
          total: localeModel.flatMap.size,
          list: Array.from(localeModel.flatMap.entries()),
        },
      };
    }

    res.status(200).json(response);
  },
};

export default allowedMethods(methodActions);
