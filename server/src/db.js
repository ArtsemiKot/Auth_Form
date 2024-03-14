const {Pool} = require('pg')

const pool = new Pool({
    password:"D11ur22a33ck",
    database: "AuthForm",
    port:5432,
    host:"localhost",
    user:'postgres'
})

module.exports = pool;