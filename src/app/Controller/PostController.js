<<<<<<< HEAD
<<<<<<< HEAD
=======
const { redirect } = require('express/lib/response');
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');

=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const { redirect } = require("express/lib/response")
const db = require("../../models")
const menuDeqy = require('../../hepers/menuDeqy')
const product = require("../../models/product")
const ChangeToSlug = require("../../hepers/toSlug")
const categoryLoop = require("../../hepers/menuDeqy")
<<<<<<< HEAD
=======
const { redirect } = require('express/lib/response');
const db = require('../../../models');
const menuDeqy = require('../../hepers/menuDeqy');
const ChangeToSlug = require('../../hepers/toSlug');
const categoryLoop = require('../../hepers/menuDeqy');
const CategoryPost = require('../../../models/categorypost');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
class ProductController {
    index = async (req, res) => {
        let data = await db.Post.findAll({
            raw: true,
<<<<<<< HEAD
<<<<<<< HEAD

        })
=======
        });
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
        });
=======

        })
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

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
<<<<<<< HEAD
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
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

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
<<<<<<< HEAD
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
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            const newProduct = {
                name: data.name,
                image_thumnail: req.files.feature_image_path[0].path.replace('public\\', '/'),
                description: data.description,
                categorypost_id: data.categorypost_id,
<<<<<<< HEAD
<<<<<<< HEAD
                slug: ChangeToSlug(data.name)
            }
            console.log(data.description);
=======
                slug: ChangeToSlug(data.name),
            };

>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
                slug: ChangeToSlug(data.name)
            }
            console.log(data.description);
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            // const iscreate = await db.Post.create(newProduct)
            // console.log(iscreate);
            // return res.redirect('/admin/product')
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        } catch (error) {

        }
    }
    del = async (req, res) => {
        const id = req.params.id
        const isdel = await db.Product.destroy({
            where: {
                id
            }
<<<<<<< HEAD
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
module.exports = new ProductController();
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: 'Thành công!'
            })

        }
    }
}
module.exports = new ProductController
<<<<<<< HEAD
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new ProductController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
