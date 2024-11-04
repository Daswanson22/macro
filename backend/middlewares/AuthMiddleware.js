const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Check paths that do not require authentication
    if (req.path === '/auth/login' || req.path === '/auth/register') {
        return next();
    }

    if(req.params.dbname || req.params.tablename) {
        return next();
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (token == null) return res.sendStatus(403); // Unauthorized
    console.log('token', token);

    jwt.verify(token, "json_web_token", (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
};

module.exports = {
    authenticateToken
};
