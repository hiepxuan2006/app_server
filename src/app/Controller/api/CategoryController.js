const ChangeToSlug = require('../../../hepers/toSlug');
const db = require('../../../../models');

class CategoryController {
    // danh sachs category
    getCategories = async (req, res) => {
        try {
            const dataAll = await db.Category.findAll({});
            return res.status(200).json({
                success: true,
                message: 'Successfuly',
                data: dataAll,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
}

module.exports = new CategoryController();
