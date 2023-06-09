import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

export const withLogging: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    return next(request, _next);
  };
};
