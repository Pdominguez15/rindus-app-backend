import { SessionOptions, Store } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

export default (store: Store): SessionOptions => ({
  secret: process.env.SESSION_SECRET || 'supersecret',
  cookie: {
    maxAge: 86400,
    secure: process.env.ENV === 'production',
  },
  store,
  resave: false,
  saveUninitialized: true,
});
