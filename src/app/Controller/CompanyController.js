<<<<<<< HEAD
<<<<<<< HEAD
=======
const { redirect } = require('express/lib/response');
const db = require('../../../models');

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
const product = require('../../../models/product');
const ChangeToSlug = require('../../hepers/toSlug');
const categoryLoop = require('../../hepers/menuDeqy');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
class CompanyController {
    index = async (req, res) => {
        let data = await db.Company.findAll({
            raw: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
        });

        return res.render('Company/indexCompany', { data });
    };
    add = async (req, res) => {
        // const htmlSelect = menuDeqy.categoryPostLoop(categories)
        return res.render('Company/addCompany');
    };
    store = async (req, res) => {
        try {
            const data = req.body;
            const newCompany = {
                name: data.name,
                image_detail: req.files.feature_image_path[0].path.replace(
                    'public\\',
                    '/',
                ),
                description: data.description,
                slug: ChangeToSlug(data.name),
            };
            console.log(newCompany);
            const iscreate = await db.Company.create(newCompany);
            return res.redirect('/admin/company');
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
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

        })



        return res.render('Company/indexCompany', { data })
    }
    add = async (req, res) => {

        // const htmlSelect = menuDeqy.categoryPostLoop(categories)
        return res.render('Company/addCompany')
    }
    store = async (req, res) => {
        try {
            const data = req.body
<<<<<<< HEAD
=======
        });

        return res.render('Company/indexCompany', { data });
    };
    add = async (req, res) => {
        // const htmlSelect = menuDeqy.categoryPostLoop(categories)
        return res.render('Company/addCompany');
    };
    store = async (req, res) => {
        try {
            const data = req.body;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            const newCompany = {
                name: data.name,
                image_detail: req.files.feature_image_path[0].path.replace('public\\', '/'),
                description: data.description,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                slug: ChangeToSlug(data.name)
            }
            console.log(newCompany);
            const iscreate = await db.Company.create(newCompany)
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
<<<<<<< HEAD
=======
                slug: ChangeToSlug(data.name),
            };
            console.log(newCompany);
            const iscreate = await db.Company.create(newCompany);
            return res.redirect('/admin/company');
            // const mang = req.files
            // console.log(mang)
            // res.send(mang)
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
module.exports = new CompanyController();
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: 'Thành công!'
            })

        }
    }
}
module.exports = new CompanyController
<<<<<<< HEAD
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CompanyController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
