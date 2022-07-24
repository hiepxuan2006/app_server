const db = require('../../../../models');

class AcountAdmin {
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await db.User.findOne({
                where: { email },
            });
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Email chưa được đăng ký!',
                });
            }
        } catch (error) {}
    };
}
module.exports = new AcountAdmin();
