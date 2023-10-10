import { config } from 'dotenv';

switch (process.env.NODE_ENV) {
  case 'production':
    config({ path: '.env.production' });
    break;
  default:
    config({ path: '.env.development' });
}
