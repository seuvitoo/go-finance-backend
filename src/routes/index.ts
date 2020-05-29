import { Router } from 'express';

import transactionsRouter from './transactions.routes';
import pots from './pots.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.use('/pots', pots);

export default routes;
