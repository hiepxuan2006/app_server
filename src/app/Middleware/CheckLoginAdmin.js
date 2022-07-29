const jwt = require('jsonwebtoken');
const createError = require('http-errors');

function CheckLoginAdmin(req, res, next) {
    const authHeader = req.header('Authorization');
    const INVALID_TOKEN = {};
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) next(createError(403, 'Token not valid'));
            req.user = user;
            next();
        });
    } else {
        next(createError(401, 'Bạn chưa đăng nhập0'));
    }
}
module.exports = CheckLoginAdmin;
