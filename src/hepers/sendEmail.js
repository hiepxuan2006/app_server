const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmail = async (mail) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASS, // generated ethereal password
        },
    });
    let info = await transporter.sendMail(mail);
};
module.exports = sendEmail;
