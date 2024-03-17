const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookie = require('cookie-parser')
const route = require('./controller/user.controller');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true, methods: 'GET,POST,PUT,DELETE,PATCH' }));
app.use(cookieParser())
app.use(bodyParser.json());
app.use('/user', route);
app.use((error, req, res, next) => {
  res.send(error.message);
});

module.exports = app;