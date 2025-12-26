const express = require('express');
const route = express.Router();
const authCtl = require('../controller/authController');

route.get('/signup', authCtl.signupForm);
route.post('/signup', authCtl.signup);

route.get('/login', authCtl.loginForm);
route.post('/login', authCtl.login);

route.get('/logout', authCtl.logout);

module.exports = route;
