const db = require('../../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports.login = async (args = {}) => {
    const { email, password } = args;

    const user = await db.User.findOne({
        where: { email },
    });

    if (!user) {
        next(createError(400, 'Email or password in valid!'));
    }

    const { verified, password: passwordDb, isAdmin } = user;
    if (!verified) {
        next(createError(400, 'Email or password in valid!'));
    }

    const validatorPassWord = await bcrypt.compareSync(password, user.password);
    if (!validatorPassWord) {
        next(createError(401, 'Email or password in valid'));
    }

    if (!isAdmin) {
        next(createError(400, ' Access is denied !'));
    }

    const token = await jwt.sign(
        { id: user.id, email: user.email, isAdmin: true },
        process.env.SECRET_KEY_TOKEN,
        { expiresIn: '1d' },
    );

    return {
        success: true,
        token: token,
        name: user.name,
        isAdmin,
    };
};

module.exports.auth = async (args = {}) => {
    const { exp, isAdmin, email } = args;
    if (exp * 1000 < Date.now()) {
        next(createError(401, 'You are not logged in '));
    }
    const data = await db.User.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
    });
    const { verified } = data;
    if (!verified) {
        next(createError(401, 'Unconfirmed account'));
    }
    if (!data) {
        next(createError(401, ' Account found'));
    }

    return data;
};
