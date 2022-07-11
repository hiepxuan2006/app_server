const db = require("../../../models")
const menuDeqy = require("../../hepers/menuDeqy")
const ChangeToSlug = require("../../hepers/toSlug")


class CategoryController {
    index = async (req, res) => {
        let data = await db.Category.findAll({
            raw: true
        })
        if (req.query.hasOwnProperty('_sort')) {
            data = await db.Category.findAll({
                order: [
                    [req.query.column, req.query.type]
                ]
            })
        }
        console.log(data);
        return res.render('category/indexCategory', { data })
    }
    add = async (req, res) => {
        const datas = await db.Category.findAll({
            raw: true
        })
        const htmlSelect = menuDeqy.categoryLoop(datas, 0, '')
        // res.send(data)
        return res.render('category/addCategory', {
            htmlSelect
        })
    }
    store = async (req, res) => {
        // const data = { name: req.body.name, parent_id: req.body.parent_id }
        const data = req.body
        const newCtegory = {
            name: data.name,
            parent_id: data.parent_id,
            image_path: req.files.feature_image_path[0].path.replace('public\\', '/'),
            slug: ChangeToSlug(data.name)


        }
        const isCreate = await db.Category.create(newCtegory)
        return res.redirect('back')
    }
    edit = async (req, res) => {
        const id = req.params.id
        let data = await db.Category.findAll({
            where: {
                id: id
            },

        })
        res.render('category/editCategory', { data })

    }
    delete = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Category.destroy({
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
};
module.exports = new CategoryController