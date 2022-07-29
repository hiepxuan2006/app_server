<<<<<<< HEAD
<<<<<<< HEAD
const { redirect } = require("express/lib/response")
const Swal = require("sweetalert2")
const menuDeqy = require("../../hepers/menuDeqy")
const categoryLoop = require("../../hepers/menuDeqy")
const ChangeToSlug = require("../../hepers/toSlug")
const db = require("../../models")
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const { redirect } = require('express/lib/response');
const Swal = require('sweetalert2');
const menuDeqy = require('../../hepers/menuDeqy');
const categoryLoop = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
const db = require('../../../models');
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
const { redirect } = require("express/lib/response")
const Swal = require("sweetalert2")
const menuDeqy = require("../../hepers/menuDeqy")
const categoryLoop = require("../../hepers/menuDeqy")
const ChangeToSlug = require("../../hepers/toSlug")
const db = require("../../models")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

class CategoryControllerPost {
    index = async (req, res) => {
        let data = await db.CategoryPost.findAll({
<<<<<<< HEAD
<<<<<<< HEAD
            raw: true
        })
=======
            raw: true,
        });
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
            raw: true,
        });
=======
            raw: true
        })
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        // if (req.query.hasOwnProperty('_sort')) {
        //     data = await db.Category.findAll({
        //         raw: true,
        //         order: [
        //             [req.query.column, req.query.type]
        //         ]
        //     })
        // }
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
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
<<<<<<< HEAD
=======
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
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        });
        if (isdel) {
            res.status(200).json({
                success: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CategoryControllerPost();
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: 'Thành công!'
            })

        }
    }
};
module.exports = new CategoryControllerPost
<<<<<<< HEAD
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CategoryControllerPost();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
