
var pgp = require('pg-promise')()

const username = process.env.RDS_USERNAME || 'twuser'
const password = process.env.RDS_PASSWORD || 'mudar123'
const host = process.env.RDS_HOST || 'localhost'
const port = process.env.RDS_PORT || '5463'
const database = process.env.RDS_DATABASE || 'mydatabase'

var connectionString = process.env.RDS_DSN_URL || `postgres://${username}:${password}@${host}:${port}/${database}`

var db = pgp(connectionString)

module.exports = db
