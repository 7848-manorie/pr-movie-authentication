const express = require('express');
const route = express.Router();
const { isLogin, isAdmin, isUser } = require('../middleware/authMiddleware');

route.get('/adminDashboard', isLogin, isAdmin, (req, res) => {
    res.render('adminDashboard');
});

route.get('/userDashboard', isLogin, isUser, (req, res) => {
    res.render('userDashboard');
});

module.exports = route;
