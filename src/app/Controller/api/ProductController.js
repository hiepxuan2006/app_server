const db = require("../../../../models")
const { Op } = require("sequelize");
class ProductController {
    getListProduct = async (req, res) => {
        try {
            const params = req.query
            let data = []
            if (params.sort && params.type) {
                data = await db.Product.findAll({
                    include:
                        [{ model: db.Category, }],
                    order: [
                        [params.sort, params.type],
                    ],

                })
            } else {

                data = await db.Product.findAll({
                    include:
                        [{ model: db.Category, }]

                })
            }


            // res.send(sort)
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
        } catch (error) {

        }

    }
    getListProductCategory = async (req, res) => {
        const params = req.query
        let data
        if (params.sort && params.type) {
            data = await db.Product.findAll({
                include:
                    [{ model: db.Category, where: { slug: params.category } }]
                ,
                order: [
                    [params.sort, params.type],
                ],

            })
        } else {

            data = await db.Product.findAll({
                include:
                    [{ model: db.Category, where: { slug: params.category } }]

            })
        }

        // res.send(params)
        res.status(200).json({
            data, success: true,
            message: 'successfully'
        })
    }
    getOnlyProduct = async (req, res) => {
        const slug = req.params.slug
        const data = await db.Product.findOne({
            where: { slug: slug },
            include:
                [{ model: db.Category }]
            ,
        })

        res.status(200).json({
            data: data

        })
    }
    getRandome = async (req, res) => {
        const data = await db.Product.findAll({
            order: db.sequelize.random(), limit: 3
        })
        res.status(200).json({
            data, message: 'successfully',
            success: true
        })
    }
    getSearch = async (req, res) => {
        try {
            let data = []
            let { q, type } = req.query
            q = q.toLowerCase()
            if (type === 'less') {
                data = await db.Product.findAll({
                    where: { 'name': { [Op.like]: '%' + q + '%' } },
                    limit: 5
                })

            }
            res.status(200).json({
                data,
                message: ''
            })
        } catch (error) {

        }
    }

}
module.exports = new ProductController