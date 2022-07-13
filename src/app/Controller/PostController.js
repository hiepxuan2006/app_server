<<<<<<< HEAD
const { redirect } = require("express/lib/response")
const db = require("../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const product = require("../../models/product")
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
=======
const { redirect } = require('express/lib/response');
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
const categoryLoop = require('../../hepers/menuDeqy');
const CategoryPost = require('../../../models/categorypost');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
class ProductController {
    index = async (req, res) => {
        let data = await db.Post.findAll({
            raw: true,
<<<<<<< HEAD

        })
=======
        });
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576

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

<<<<<<< HEAD

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
=======
        return res.render('Post/indexPost', { data });
    };
    add = async (req, res) => {
        let categories = await db.CategoryPost.findAll({
            raw: true,
        });
        const htmlSelect = menuDeqy.categoryPostLoop(categories);
        return res.render('Post/addPost', { htmlSelect });
    };
    store = async (req, res) => {
        try {
            const data = req.body;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
            const newProduct = {
                name: data.name,
                image_thumnail: req.files.feature_image_path[0].path.replace('public\\', '/'),
                description: data.description,
                categorypost_id: data.categorypost_id,
<<<<<<< HEAD
                slug: ChangeToSlug(data.name)
            }
            console.log(data.description);
=======
                slug: ChangeToSlug(data.name),
            };

>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
            // const iscreate = await db.Post.create(newProduct)
            // console.log(iscreate);
            // return res.redirect('/admin/product')
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
<<<<<<< HEAD
        } catch (error) {

        }
    }
    del = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Product.destroy({
            where: {
                id
            }
=======
            return res.redirect('back');
        } catch (error) {}
    };
    del = async (req, res) => {
        const id = req.params.id;
        const isdel = await db.Product.destroy({
            where: {
                id,
            },
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
        });
        if (isdel) {
            res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: 'Thành công!'
            })

        }
    }
}
module.exports = new ProductController
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new ProductController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
