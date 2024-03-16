const pool = require('../db')

async function createUserDB(name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'insert into users(name, surname, email, password) values($1,$2,$3,$4) returning*';
    const result = (await client.query(sql, [name, surname, email, password])).rows;
    return result;
}

async function authUserDB(email, password) {
    const client = await pool.connect();
    const sql_email = 'select * from users where email = $1 and password = $2'
    const result = (await client.query(sql_email, [email, password])).rows
    return result
}
module.exports = { createUserDB, authUserDB }