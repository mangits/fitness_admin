// Update with your config settings.
const path = require('path');
const connectionString = process.env.DATABASE_URL;
// const connection = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://postgres:docker@localhost:5432/postgres`,
    // searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations'),
    },
    seeds: { directory: path.join(__dirname, '/seeds') },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
  }

};
