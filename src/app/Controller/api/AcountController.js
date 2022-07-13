const db = require("../../../../models")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const senEmail = require('../../../hepers/sendEmail')
const jwt = require('jsonwebtoken');
const { use } = require("../../../routers/api/acount");
class AcountController {
    register = async (req, res) => {

        try {
            const { name, email, password } = req.body

            const isUser = await db.User.findAll({
                where: { email: email }
            })
            console.log(isUser.length > 0 ? true : false);
            if (isUser.length)
                return res.status(400).json({
                    success: false,
                    message: 'Email đã được đăng ký'
                })

            const hashPassword = await bcrypt.hashSync(password, salt);
            const newUser = {
                name: name,
                email: email,
                password: hashPassword,
                verified: false,
                avatar: '',
                isAdmin: false
            }
            const isRegister = await db.User.create(newUser)
            const otp = `${Math.floor(100000 + Math.random() * 900000)}`
            const hashOtp = await bcrypt.hashSync(otp, saltRounds)
            const newUserOtp = {
                user_id: isRegister.id,
                otp: hashOtp,
                expiresAt: Date.now() + 3600000,

            }
            await db.UserOTPVerification.create(newUserOtp)
            if (isRegister) {
                senEmail({ email, otp })
                res.status(200).json({
                    message: 'Mã xác nhận đã được gửi tới email của bạn',
                    data: {
                        email: email,
                        user_id: isRegister.id
                    }
                })
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    }
    verifyOtpUser = async (req, res) => {
        try {
            const { user_id, otp } = req.body
            const UserVerify = await db.UserOTPVerification.findOne({
                where: { user_id: user_id }
            })
            if (UserVerify.length <= 0) {
                throw new Error(
                    'Tài khoản không xác định hoặc đã được xác nhận xác nhận.Vui lòng đăng kí hoặc đăng nhập'
                )
            } else {
                const { expiresAt } = UserVerify
                const hashOtp = UserVerify.otp
                if (expiresAt < Date.now()) {
                    await db.UserOTPVerification.destroy({
                        where: { user_id: user_id }
                    })
                    throw new Error(
                        'Mã xác nhận không chính xác hoặc đã hết hạn'
                    )
                } else {
                    const isOtpvery = await bcrypt.compareSync(otp, hashOtp)
                    if (!isOtpvery) {
                        res.status(401).json(
                            {
                                message: 'Mã xác nhận không chính xác. vui lòng nhập lại?',
                                success: false
                            }
                        )
                    } else {
                        await db.User.update(
                            {
                                verified: true,
                            },
                            {
                                where: { id: user_id }
                            }
                        )
                        await db.UserOTPVerification.destroy({
                            where: { user_id: user_id }
                        })
                        return res.status(200).json({
                            message: 'Xác nhận thành công',
                            success: true
                        })
                    }
                }
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
    login = async (req, res) => {
        try {
            const { email, password } = req.body
            let user = await db.User.findOne({
                where: { email: email },

            })
            if (user.length <= 0) {
                return res.status(401).json({
                    message: 'Mật khẩu hoặc email không chínnh xác. Vui lòng nhập lại!'
                })
            } else {
                const { expiresAt } = user
                if (expiresAt < Date.now()) {
                    return res.status(401).json({
                        message: 'Taif khoản chưa được xác nhận. Vui lòng xác nhận!'
                    })

                } else {
                    const valiPass = await bcrypt.compareSync(password, user.password)
                    if (!valiPass) {
                        res.status(401).json(
                            {
                                message: 'Email hoặc mật khẩu không chính xác. vui lòng nhập lại?',
                                success: false
                            }
                        )
                    } else {
                        const token = await jwt.sign({ id: user.id, email: user.email },
                            process.env.SECRET_KEY,
                            { expiresIn: "1d" }
                        )
                        res.status(200).json(
                            {
                                message: 'Đăng nhập thành công',
                                success: true,
                                token: token,
                                infor: user.name
                            }
                        )
                    }
                }
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    }
    verifyLogin = async (req, res) => {
        if (req.user)
            try {
                const user = await db.User.findOne({
                    where: { id: req.user.id },
                    attributes: { exclude: ['password'] }
                })
                if (!user) res.status(401).json({
                    success: false,
                    message: 'Chưa đăng nhập '
                })
                if (!user.verified) res.status(401).json({
                    message: 'Chưa đăng nhập'
                })
                res.status(200).json({
                    success: true,
                    user,
                    time: req.user.exp
                })
            } catch (error) {
                res.status(500).json({
                    message: error.message,
                    success: false
                })
            }
    }

}
module.exports = new AcountController