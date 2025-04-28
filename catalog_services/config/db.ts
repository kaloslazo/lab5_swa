import knex from 'knex';

export const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/catalog_db'
});
