<<<<<<< HEAD
<<<<<<< HEAD
const menuDeqy = require("../../hepers/menuDeqy")
const db = require("../../models")
=======
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
=======
const menuDeqy = require("../../hepers/menuDeqy")
const db = require("../../models")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

class CategoryController {
    index = async (req, res) => {
        let data = await db.Category.findAll({
<<<<<<< HEAD
<<<<<<< HEAD
=======
            raw: true,
        });
        if (req.query.hasOwnProperty('_sort')) {
            data = await db.Category.findAll({
                order: [[req.query.column, req.query.type]],
            });
        }
        console.log(data);
        return res.render('category/indexCategory', { data });
    };
    add = async (req, res) => {
        const datas = await db.Category.findAll({
            raw: true,
        });
        const htmlSelect = menuDeqy.categoryLoop(datas, 0, '');
        // res.send(data)
        return res.render('category/addCategory', {
            htmlSelect,
        });
    };
    store = async (req, res) => {
        // const data = { name: req.body.name, parent_id: req.body.parent_id }
        const data = req.body;
        const newCtegory = {
            name: data.name,
            parent_id: data.parent_id,
            image_path: req.files.feature_image_path[0].path.replace(
                'public\\',
                '/',
            ),
            slug: ChangeToSlug(data.name),
        };
        const isCreate = await db.Category.create(newCtegory);
        return res.redirect('back');
    };
    edit = async (req, res) => {
        const id = req.params.id;
        let data = await db.Category.findAll({
            where: {
                id: id,
            },
        });
        res.render('category/editCategory', { data });
    };
    delete = async (req, res) => {
        const id = req.params.id;
        const isdel = await db.Category.destroy({
            where: {
                id,
            },
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            raw: true
        })
        if (req.query.hasOwnProperty('_sort')) {
            data = await db.Category.findAll({
                order: [
                    [req.query.column, req.query.type]
                ]
            })
        }
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
        const data = { name: req.body.name, parent_id: req.body.parent_id }
        const isCreate = await db.Category.create(data)
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
<<<<<<< HEAD
=======
            raw: true,
        });
        if (req.query.hasOwnProperty('_sort')) {
            data = await db.Category.findAll({
                order: [[req.query.column, req.query.type]],
            });
        }
        console.log(data);
        return res.render('category/indexCategory', { data });
    };
    add = async (req, res) => {
        const datas = await db.Category.findAll({
            raw: true,
        });
        const htmlSelect = menuDeqy.categoryLoop(datas, 0, '');
        // res.send(data)
        return res.render('category/addCategory', {
            htmlSelect,
        });
    };
    store = async (req, res) => {
        // const data = { name: req.body.name, parent_id: req.body.parent_id }
        const data = req.body;
        const newCtegory = {
            name: data.name,
            parent_id: data.parent_id,
            image_path: req.files.feature_image_path[0].path.replace('public\\', '/'),
            slug: ChangeToSlug(data.name),
        };
        const isCreate = await db.Category.create(newCtegory);
        return res.redirect('back');
    };
    edit = async (req, res) => {
        const id = req.params.id;
        let data = await db.Category.findAll({
            where: {
                id: id,
            },
        });
        res.render('category/editCategory', { data });
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
module.exports = new CategoryController();
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: 'Thành công!'
            })

        }
    }
};
module.exports = new CategoryController
<<<<<<< HEAD
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CategoryController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
