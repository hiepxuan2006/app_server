const { redirect } = require("express/lib/response")
const db = require("../../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
const CategoryPost = require('../../../models/categorypost')
class ProductController {
    index = async (req, res) => {
        let data = await db.Post.findAll({
            raw: true,

        })

        // if (req.query.hasOwnProperty('_sort')) {
        //     data = await db.Product.findAll({
        //         raw: true,
        //         include: [{
        //             model: db.Category,
        //             required: true,
        //         }],
        //         order: [
        //             [req.query.column, req.query.type]
        //         ]
        //     })
        // }


        return res.render('Post/indexPost', { data })
    }
    add = async (req, res) => {
        let categories = await db.CategoryPost.findAll({
            raw: true
        })
        const htmlSelect = menuDeqy.categoryPostLoop(categories)
        return res.render('Post/addPost', { htmlSelect })
    }
    store = async (req, res) => {
        try {
            const data = req.body
            const newProduct = {
                name: data.name,
                image_thumnail: req.files.feature_image_path[0].path.replace('public\\', '/'),
                description: data.description,
                categorypost_id: data.categorypost_id,
                slug: ChangeToSlug(data.name)
            }

            // const iscreate = await db.Post.create(newProduct)
            // console.log(iscreate);
            // return res.redirect('/admin/product')
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
            return res.redirect('back')

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