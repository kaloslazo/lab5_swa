import knex from 'knex'
export const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/orders'
})