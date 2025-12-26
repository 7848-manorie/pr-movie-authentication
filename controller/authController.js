const User = require('../modals/User');
const bcrypt = require('bcrypt');

exports.signupForm = (req, res) => {
    res.render('signup');
};

exports.loginForm = (req, res) => {
    res.render('login');
};

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hash,
        role
    });

    res.redirect('/login');
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.redirect('/login');

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.redirect('/login');

    res.cookie('userId', user._id);
    res.cookie('role', user.role);

    user.role === 'admin'
        ? res.redirect('/adminDashboard')
        : res.redirect('/userDashboard');
};

exports.logout = (req, res) => {
    res.clearCookie('userId');
    res.clearCookie('role');
    res.redirect('/login');
};
