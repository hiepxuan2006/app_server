<<<<<<< HEAD
const { redirect } = require('express/lib/response');
const Swal = require('sweetalert2');
const menuDeqy = require('../../hepers/menuDeqy');
const categoryLoop = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
const db = require('../../../models');
=======
const { redirect } = require("express/lib/response")
const Swal = require("sweetalert2")
const menuDeqy = require("../../hepers/menuDeqy")
const categoryLoop = require("../../hepers/menuDeqy")
const ChangeToSlug = require("../../hepers/toSlug")
const db = require("../../models")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665

class CategoryControllerPost {
    index = async (req, res) => {
        let data = await db.CategoryPost.findAll({
<<<<<<< HEAD
            raw: true,
        });
=======
            raw: true
        })
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
        // if (req.query.hasOwnProperty('_sort')) {
        //     data = await db.Category.findAll({
        //         raw: true,
        //         order: [
        //             [req.query.column, req.query.type]
        //         ]
        //     })
        // }
<<<<<<< HEAD
        return res.render('CategoryPost/indexCategoryPost', { data });
    };
    add = async (req, res) => {
        const datas = await db.CategoryPost.findAll({
            raw: true,
        });
        const htmlSelect = menuDeqy.categoryLoop(datas, 0, '');
        // res.send(data)
        return res.render('CategoryPost/addCategoryPost', {
            htmlSelect,
        });
    };
    store = async (req, res) => {
        let data = req.body;
        const newCatePost = { name: data.name, slug: ChangeToSlug(data.name) };
        // return res.redirect('/admin/category/add')
        const isCreate = await db.CategoryPost.create(data);
        return res.redirect('back');
    };
    edit = async (req, res) => {
        const id = req.params.id;
        let data = await db.Category.findAll({
            where: {
                id: id,
            },
        });
        // res.json(data)
        res.render('Category/editCategory', { data });
    };
    delete = async (req, res) => {
        const id = req.params.id;
        const isdel = await db.Category.destroy({
            where: {
                id,
            },
=======
        return res.render('categoryPost/indexCategoryPost', { data })
    }
    add = async (req, res) => {
        const datas = await db.CategoryPost.findAll({
            raw: true
        })
        const htmlSelect = menuDeqy.categoryLoop(datas, 0, '')
        // res.send(data)
        return res.render('categoryPost/addCategoryPost', {
            htmlSelect
        })
    }
    store = async (req, res) => {
        let data = req.body
        const newCatePost = { name: data.name, slug: ChangeToSlug(data.name) }
        // return res.redirect('/admin/category/add')
        const isCreate = await db.CategoryPost.create(data)
        return res.redirect('back')
    }
    edit = async (req, res) => {
        const id = req.params.id
        let data = await db.Category.findAll({
            where: {
                id: id
            },

        })
        // res.json(data)
        res.render('category/editCategory', { data })

    }
    delete = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Category.destroy({
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
module.exports = new CategoryControllerPost();
=======
                message: 'Thành công!'
            })

        }
    }
};
module.exports = new CategoryControllerPost
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
