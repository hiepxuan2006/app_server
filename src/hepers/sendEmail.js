const nodemailer = require("nodemailer");
require('dotenv').config()
const sendEmail = async (dataEmail) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASS, // generated ethereal password
        },
    });
    let info = await transporter.sendMail({
        from: '"HX-Farm 👻" hiepxuan2605@gmail.com', // sender address
        to: ` ${dataEmail.email}`, // list of receivers
        subject: "Xác nhận email ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: `<p>Mã xác nhận của ban là :<b>${dataEmail.otp}</b> .Hiệu lục trong vòng 1 giờ`, // html body
    });
}
module.exports = sendEmail