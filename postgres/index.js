const pg = require('pg')


const config = {
    user: 'postgres',
    database: 'msusdesk',
    password: 'postgre',
    port: 5432,
    host: 'localhost',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new pg.Pool(config);

async function postgres() {
    try {
      return pool;
    } catch (e) {
      pool.end(); // end connection
      console.log("Errors: ", e);
    }
  }

  module.exports = postgres;