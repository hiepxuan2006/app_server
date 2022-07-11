const db = require("../../../../models")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
class AcountController {
    login = async (req, res) => {

        try {
            const { email, password } = req.body

            const isUser = await db.User.findOne({
                where: { email: email }
            })
            if (!isUser)
                res.status(400).json({
                    success: false,
                    message: 'Email đã được đăng ký'
                })
            const hashPassword = bcrypt.hashSync(password, salt);
            const newUser = new User({
                userName: data.userName,
                password: hashPassword,
                email: data.email,
                isAdmin: data.isAdmin,
                avatar: data.avatar
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}
module.exports = new AcountController