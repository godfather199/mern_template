import morgan from 'morgan';
import {ENV} from './config';
import logger from './logger';
import { Request, Response } from 'express';


morgan.token('message', (req: Request, res: Response): string => res.locals.errorMessage || '');

const getIpFormat = (): string => (ENV === 'production' ? ':remote-addr - ' : '');

const successResponseFormat: string = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat: string = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const successHandler = morgan(successResponseFormat, {
  skip: (req: Request, res: Response): boolean => res.statusCode >= 400,
  stream: { write: (message: string) => logger.info(message.trim()) },
});

const errorHandlerMorgan = morgan(errorResponseFormat, {
  skip: (req: Request, res: Response): boolean => res.statusCode < 400,
  stream: { write: (message: string) => logger.error(message.trim()) },
});



export {
  successHandler,
  errorHandlerMorgan,
};