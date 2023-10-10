import { ProfileRepository } from '@/repository/profile';
import { Knex } from 'knex';

export class KnexProfileRepository implements ProfileRepository {
  private readonly db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  public findProfileId(email: string): Promise<string | undefined> {
    return this.db
      .table<string>('users')
      .where('email', email)
      .first()
      .select('id');
  }
}
