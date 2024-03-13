const express = require('express');
const { createUser } = require('../service/service');
const { request, response } = require('../app');
const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        response(data)
    } catch (error) {
        response(error.message);
    }
})
module.exports = route;