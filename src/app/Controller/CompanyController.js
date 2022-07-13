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
const product = require('../../../models/product');
const ChangeToSlug = require('../../hepers/toSlug');
const categoryLoop = require('../../hepers/menuDeqy');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
class CompanyController {
    index = async (req, res) => {
        let data = await db.Company.findAll({
            raw: true,
<<<<<<< HEAD

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
            const newCompany = {
                name: data.name,
                image_detail: req.files.feature_image_path[0].path.replace('public\\', '/'),
                description: data.description,
<<<<<<< HEAD
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
module.exports = new CompanyController
=======
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CompanyController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
