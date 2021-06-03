// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/treedata',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: { 
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/'
    },
    useNullAsDefault: true
  } 
};
