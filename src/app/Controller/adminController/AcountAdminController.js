const Joi = require('joi');
const createError = require('http-errors');
const AccountAction = require('../../Actions/AccountAction');
const { sendError, sendSuccess } = require('../../../hepers/response');
const db = require('../../../models');

module.exports.login = async (req, res) => {
    try {
        const { body } = req;
        const Schema = Joi.object({
            email: Joi.string().trim().required().messages({
                'any.required': 'Missing email.',
            }),

            password: Joi.string().trim().required().messages({
                'any.required': 'Missing password.',
            }),
        });
        const argsValidator = await Schema.validateAsync(body);

        AccountAction.login(argsValidator)
            .then(sendSuccess(req, res))
            .catch(sendError(req, res));
    } catch (error) {
        sendError(req, res)(error);
    }
};

module.exports.auth = async (req, res, next) => {
    try {
        const headerToken = req.decode;

        AccountAction.auth(headerToken)
            .then(sendSuccess(req, res))
            .catch(sendError(req, res));
    } catch (error) {
        sendError(req, res)(error);
    }
};
