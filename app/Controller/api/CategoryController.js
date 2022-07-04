const db = require("../../../models")

class CategoryController {
    // danh sachs category
    getCategory = async (req, res) => {
        let data = await db.Category.findAll({
            raw: true,
            include: [{
                require: true,
                model: db.Product,
            }]
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