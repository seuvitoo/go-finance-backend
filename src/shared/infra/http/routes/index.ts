import { Router } from 'express';

import goals from '@modules/goals/infra/http/routes/goals.routes';
import logRequests from '../middlewares/logRequests';

const routes = Router();

routes.use(logRequests);

routes.use('/goals', goals);

export default routes;
