import { Request, Response, NextFunction } from 'express';
import ICustomError from './ICustomError';

class ErrorHandler {
  public static handleError(err: ICustomError, _req: Request, res: Response, _next: NextFunction) {
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong';

    console.log('err', err);

    res.status(status).json({ message });
  }
}

export default ErrorHandler;
