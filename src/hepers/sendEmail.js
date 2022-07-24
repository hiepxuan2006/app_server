const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmail = async (dataEmail) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    let info = await transporter.sendMail(dataEmail);
};
module.exports = sendEmail;
const form = {};
