<<<<<<< HEAD
const { redirect } = require('express/lib/response');
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');

=======
const { redirect } = require("express/lib/response")
const db = require("../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const product = require("../../models/product")
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
class ProductController {
    index = async (req, res) => {
        let data = await db.Post.findAll({
            raw: true,
<<<<<<< HEAD
        });
=======

        })
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665

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
            const newProduct = {
                name: data.name,
                image_thumnail: req.files.feature_image_path[0].path.replace(
                    'public\\',
                    '/',
                ),
                description: data.description,
                categorypost_id: data.categorypost_id,
                slug: ChangeToSlug(data.name),
            };

=======

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
            console.log(data.description);
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
            // const iscreate = await db.Post.create(newProduct)
            // console.log(iscreate);
            // return res.redirect('/admin/product')
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
<<<<<<< HEAD
            return res.redirect('back');
        } catch (error) {}
    };
    del = async (req, res) => {
        const id = req.params.id;
        const isdel = await db.Product.destroy({
            where: {
                id,
            },
=======
        } catch (error) {

        }
    }
    del = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Product.destroy({
            where: {
                id
            }
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
        });
        if (isdel) {
            res.status(200).json({
                success: true,
<<<<<<< HEAD
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new ProductController();
=======
                message: 'Thành công!'
            })

        }
    }
}
module.exports = new ProductController
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
