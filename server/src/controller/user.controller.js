const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse')
const createToken = require('../helper/jwt')
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password)
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await authUser(email, password)
        const token = createToken(data[0])
        res.cookie("access_token", token, {
            httpOnly: false,
            secure: true,
        });
        buildResponse(res, 200, 'Succses')
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

module.exports = route;