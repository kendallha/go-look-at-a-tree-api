const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'postgres',
  password: 'Cecilia1%',
  host: 'localhost',
  port: 5432,
  database: 'treedata'
});

const getTrees = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM trees ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows)
    })
  })
}

const postTree = (body) => {
  return new Promise((resolve, reject) => {
    const { name, scientific_name, region, average_height, lifespan, fact, image } = body
    pool.query('INSERT INTO trees (name, scientific_name, region, average_height, lifespan, fact, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [name, scientific_name, region, average_height, lifespan, fact, image], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve((`A new tree has been added added: ${JSON.stringify(results.rows[0])}`))
    })
  })
}

module.exports = { getTrees, postTree }
