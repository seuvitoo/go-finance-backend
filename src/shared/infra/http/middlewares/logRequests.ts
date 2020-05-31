import { Response, Request, NextFunction } from 'express';

export default function logRequests(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  next();
  console.log(logLabel);
}
