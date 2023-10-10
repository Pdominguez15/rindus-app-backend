import cors from 'cors';
import knexSessionStore from 'connect-session-knex';
import session from 'express-session';

import sessionConfig from '@/config/session';

import express, { Express } from 'express';
import { httpLoggerMiddleware } from '@/config/logger';
import { Knex } from 'knex';

export const configure = (app: Express, knex: Knex) => {
  app.disable('x-powered-by');
  app.use(httpLoggerMiddleware());
  app.use('/login', express.json());
  app.use(cors());

  const store = new (knexSessionStore(session))({
    knex,
  });
  app.use(session(sessionConfig(store)));

  return app;
};
