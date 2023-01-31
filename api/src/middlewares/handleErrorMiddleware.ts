import { RequestHandler, Response, Request, NextFunction } from "express";

export default (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise
      .resolve(fn(req, res, next))
      .catch(next);
  };
};