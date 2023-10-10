import pino from 'pino';
import { pinoHttp } from 'pino-http';

const logLevel =
  process.env.NODE_ENV === 'test' ? 'silent' : process.env.LOG_LEVEL || 'info';

export const logger = pino({ level: logLevel });

export const httpLoggerMiddleware = () =>
  pinoHttp({ logger, useLevel: 'trace' });
