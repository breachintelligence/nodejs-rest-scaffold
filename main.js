const express = require('express')
const app = express()
const port = 3000
const db = require('./models');

/**
 * To initialize the database schema
 * ```
 * npx sequelize-cli db:migrate
 * ```
 *
 * To seed the database with some test data:
 *
 * ```
 * npx sequelize db:seed:all
 * ```
 *
 * To remove the test data:
 *
 * ```
 * npx sequelize db:seed:undo
 */

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})