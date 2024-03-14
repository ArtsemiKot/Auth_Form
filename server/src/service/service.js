const {createUserDB}= require('../repository/repository')

async function createUser(name, surname, email, password){
        const data = await createUserDB(name, surname, email, password);
        if(!data.length) throw new Error('bad')
        return data;
        }  

module.exports = {createUser};