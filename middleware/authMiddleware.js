exports.isLogin = (req, res, next) => {
    if (!req.cookies.userId) {
        return res.redirect('/login');
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.cookies.role !== 'admin') {
        return res.redirect('/userDashboard');
    }
    next();
};

exports.isUser = (req, res, next) => {
    if (req.cookies.role !== 'user') {
        return res.redirect('/adminDashboard');
    }
    next();
};
