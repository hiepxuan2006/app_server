const jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports.CheckLoginAdmin = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY_TOKEN, (err, decode) => {
            if (err) next(createError(403, 'Token not valid'));
            const { isAdmin } = decode;
            if (!isAdmin) next(createError(401, 'Access is denied'));
            req.decode = decode;
            next();
        });
    } else {
        next(createError(401, 'No token provided'));
    }
};
