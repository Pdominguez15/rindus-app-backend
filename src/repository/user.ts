import { Knex } from 'knex';
import { User } from '@/model/User';

export function getAllUsers(pg: Knex): Promise<User[]> {
  return pg.table<User>('users');
}
