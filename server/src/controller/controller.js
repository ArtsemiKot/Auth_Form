const express = require('express');
const { createUser } = require('../service/service');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password)
        res(data)
    } catch (error) {
        res(error.message);
    }
})
module.exports = route;