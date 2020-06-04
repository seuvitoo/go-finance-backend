import { Router } from 'express';

import Goals from '@modules/goals/infra/http/routes/goals.routes';
import logRequests from '../middlewares/logRequests';

const routes = Router();

routes.use(logRequests);

routes.use('/goals', Goals);

export default routes;
