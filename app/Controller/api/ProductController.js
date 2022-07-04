const db = require("../../../models")

class ProductController {
    getListProduct = async (req, res) => {
        const data = await db.Product.findAll({
            raw: true,
            include:
                [{ model: db.Category, as: 'cate_' }]

        })

        if (data) {
            res.status(200).json({
                data: data,
                success: true,
                message: 'SuccessFully'
            })
        }
        else {
            res.status(500).json({
                data: data,
                success: false,
                message: 'Server disconected!'
            })
        }

    }
    getListProductCategory = async (req, res) => {
        const slug = req.params.slug


        res.status(200).json({
            slug: slug
        })
    }
    getOnlyProduct = async (req, res) => {
        const slug = req.params.slug


        res.status(200).json({
            slug: slug
        })
    }

}
module.exports = new ProductController