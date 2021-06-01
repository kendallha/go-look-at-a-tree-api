const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'postgres',
  password: 'Cecilia1%',
  host: 'localhost',
  port: 5432,
  database: 'treedata'
});

module.exports = pool;
