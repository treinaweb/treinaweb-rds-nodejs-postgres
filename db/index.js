
var pgp = require('pg-promise')()

const username = process.env.RDS_USERNAME || 'twuser'
const password = process.env.RDS_PASSWORD || 'mudar123'
const host = process.env.RDS_HOST || 'tw-postgres-rds.c6kdngmld0xo.us-east-1.rds.amazonaws.com'
const port = process.env.RDS_PORT || '5432'
const database = process.env.RDS_DATABASE || 'mydatabase'

var connectionString = process.env.RDS_DSN_URL || `postgres://${username}:${password}@${host}:${port}/${database}`
console.log(connectionString)

var db = pgp(connectionString)

module.exports = db
