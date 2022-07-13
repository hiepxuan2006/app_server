const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    const INVALID_TOKEN = {};
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err)
                res.status(403).json({
                    success: false,
                    message: 'token is not valid',
                });
            // const isvalid = INVALID_TOKEN[token] ? false : true
            // console.log(INVALID_TOKEN[token]);
            // if (user) {
            req.user = user;
            next();
            // } else {
            //     return res.status(401).json({
            //         success: false,
            //         message: 'Bạn chưa đăng nhập'
            //     })
            // }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Bạn chưa đăng nhập',
        });
    }
}
module.exports = verifyToken;
