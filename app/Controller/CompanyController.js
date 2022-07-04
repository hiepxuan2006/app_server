const { redirect } = require("express/lib/response")
const db = require("../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const product = require("../../models/product")
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
class CompanyController {
    index = async (req, res) => {
        let data = await db.Company.findAll({
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


        return res.render('Company/indexCompany', { data })
    }
    add = async (req, res) => {
        let categories = await db.CategoryPost.findAll({
            raw: true
        })
        const htmlSelect = menuDeqy.categoryPostLoop(categories)
        return res.render('Company/addCompany', { htmlSelect })
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
            console.log(newProduct);
            const iscreate = await db.Post.create(newProduct)
            console.log(iscreate);
            return res.redirect('/admin/company')
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
module.exports = new CompanyController