const pool = require('../db')

async function createUserDB(name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'insert into users(name, surname, email, password) values($1,$2,$3) returning*';
    const result = (await client.query(sql, [name, surname, email, password])).rows;
    return result;
}

module.exports = { createUserDB }