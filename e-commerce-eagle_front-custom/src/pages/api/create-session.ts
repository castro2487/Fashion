import { withSessionRoute } from '@middlewares';
import { handler } from '@modules/api/session/create-session';

export default withSessionRoute(handler);
