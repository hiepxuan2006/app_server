const { redirect } = require("express/lib/response")
const db = require("../../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const category = require("../../../models/category")
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
class ProductController {
    index = async (req, res) => {
        let data = await db.Product.findAll({
            include: [{
                model: db.Category,
            }]
        })
        if (req.query.hasOwnProperty('_sort')) {
            data = await db.Product.findAll({
                include: [{
                    model: db.Category,
                }],
                order: [
                    [req.query.column, req.query.type]
                ]
            })
        }


        data = data.map(item => item.get({ plain: true }))
        return res.render('product/indexProduct', { data })
    }
    add = async (req, res) => {
        let categories = await db.Category.findAll({
            raw: true
        })
        const htmlSelect = menuDeqy.categoryLoop(categories, 0, '')
        return res.render('product/addProduct', { htmlSelect })
    }
    store = async (req, res) => {
        try {
            const data = req.body
            const newProduct = {
                name: data.name,
                price: data.price,
                feature_image_path: `upload/${req.files.feature_image_path[0].filename}`,
                content: data.contents,
                category_id: data.category_id,
                slug: ChangeToSlug(data.name)
            }
            const iscreate = await db.Product.create(newProduct)
            console.log(iscreate);
            return res.redirect('/admin/product')
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
        } catch (error) {

        }
    }
    del = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Product.destroy({
            where: {
                id
            }
        });
        if (isdel) {
            res.status(200).json({
                success: true,
                message: 'Thành công!'
            })

        }
    }
}
module.exports = new ProductController