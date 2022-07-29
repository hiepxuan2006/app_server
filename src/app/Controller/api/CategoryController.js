<<<<<<< HEAD
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
=======
const db = require("../../../models")

class CategoryController {
    // danh sachs category
    getCategory = async (req, res) => {
        let data = await db.Category.findAll({
            raw: true
        })
        if (data) {
            res.status(200).json({
                data: data,
                success: true,
                message: 'Successfully'
            })
        }
        else {
            res.status(500).json(
                {
                    success: false,
                    message: 'faile'
                }
            )
        }
    }
}
module.exports = new CategoryController
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
