import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import { IRON_SESSION_OPTIONS } from '@constants/index';

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, IRON_SESSION_OPTIONS);
}

export function withSessionSsr<P extends TCommonObject>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, IRON_SESSION_OPTIONS);
}
