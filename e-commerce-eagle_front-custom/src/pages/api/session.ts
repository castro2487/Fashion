import { withSessionRoute } from '@middlewares';
import { handler } from '@modules/api/session/get-session';

export default withSessionRoute(handler);
