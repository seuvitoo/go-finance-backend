import { Router, Response, Request, NextFunction } from 'express';

import transactionsRouter from './transactions.routes';
import pots from './pots.routes';

const routes = Router();

function logRequests(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  next();
  // eslint-disable-next-line no-console
  console.log(logLabel);
}

routes.use(logRequests);

routes.use('/transactions', transactionsRouter);
routes.use('/pots', pots);

export default routes;
