const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const SECRET_KEY_DEFAULT = process.env.SECRET_KEY_TOKEN;
const { getModel } = require('../connection/database');
const db = require('../../models');

const getAccessToken = (req) => {
    const header = (req.headers['Authorization'] || '').trim();
    const headerAuthor = (req.headers['authorization'] || '').trim();
    const fromXHeader = (req.headers['x-access-token'] || '').trim();

    const fromHeader = fromXHeader || headerAuthor || header;

    if (fromHeader) {
        return fromHeader.replace('Bearer ', '').trim();
    }

    return (req.body.token || req.query.token || '') + '';
};

module.exports.authorRoleAdmin = async (req, res, next) => {
    const Account = getModel('Account');
    const token = getAccessToken(req);
    try {
        if (!token) {
            next(createError(400, 'No token provided'));
        } else {
            await jwt.verify(token, SECRET_KEY_DEFAULT, async (err, decoded) => {
                if (err) {
                    next(createError(400, 'Something went wrong. Please sign in again.'));
                }
                const { id, is_admin, email } = decoded;
                if (exp < Date.now()) next(createError(401, 'Access token invalid'));
                const account = await db.User.findOne({
                    where: { email },
                });
                if (!account) next(createError(401, 'Access token invalid'));
                if (!is_admin) next(createError(40, ' Access is denied'));
                next();
            });
        }
    } catch (error) {
        next(createError.InternalServerError('Internal Server Error'));
    }
};

module.exports.authorization = async (req, res, next) => {
    const Account = getModel('Account');
    const token = getAccessToken(req);
    try {
        if (!token) {
            next(createError(400, 'No token provided'));
        } else {
            await jwt.verify(token, SECRET_KEY_DEFAULT, async (err, decoded) => {
                if (err) {
                    next(createError(400, 'Something went wrong. Please sign in again.'));
                }
                const { id, is_admin, email } = decoded;
                if (exp < Date.now()) next(createError(401, 'Access token invalid'));
                const account = await db.User.findOne({
                    where: { email },
                });
                if (!account) next(createError(401, 'Access token invalid'));
                next();
            });
        }
    } catch (error) {
        next(createError.InternalServerError('Internal Server Error'));
    }
};
