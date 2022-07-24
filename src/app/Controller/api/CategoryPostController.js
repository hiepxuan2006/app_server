const db = require('../../../models');

class CtegoryPostController {
    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({});

            res.status(200).json({
                data,
                success: true,
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new CtegoryPostController();
