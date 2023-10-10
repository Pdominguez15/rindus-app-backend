import knex from 'knex';
import config from '@/config/database/knex';

export function connectDatabase() {
  return knex(config);
}
