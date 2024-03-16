const { createUserDB, authUserDB } = require('../repository/user.repository')

async function createUser(name, surname, email, password) {
        const data = await createUserDB(name, surname, email, password);
        if (!data.length) throw new Error('User is not create')
        return data;
}

async function authUser(email, password) {
        const data = await authUserDB(email, password)
        if (!data.lenght) throw new Error('User is not create')
        return data
}
module.exports = { createUser, authUser };