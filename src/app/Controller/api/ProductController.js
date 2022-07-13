<<<<<<< HEAD
const db = require("../../../models")
const { Op } = require("sequelize");
class ProductController {
    getListProduct = async (req, res) => {
        try {
            const params = req.query
            let data = []
            if (params.sort && params.type) {
                data = await db.Product.findAll({
                    include:
                        [{ model: db.Category, }],
                    order: [
                        [params.sort, params.type],
                    ],

                })
            } else {

                data = await db.Product.findAll({
                    include:
                        [{ model: db.Category, }]

                })
            }


            // res.send(sort)
=======
const db = require('../../../../models');
const { Op } = require('sequelize');
const { fn } = require('sequelize');
class ProductController {
    getListProduct = async (req, res) => {
        try {
            let { sort, type, page = 1, limit = 6 } = req.query;
            let totalRows;
            const skip = (page - 1) * limit;
            let data = [];

            if (sort && type) {
                const { count, rows } = await db.Product.findAndCountAll({
                    include: [{ model: db.Category }],
                    order: [[sort, type]],
                    offset: skip,
                    limit: limit,
                });
                data = rows;
                totalRows = count;
            } else {
                const { count, rows } = await db.Product.findAndCountAll({
                    include: [{ model: db.Category }],
                    offset: skip,
                    limit: limit,
                });
                data = rows;
                totalRows = count;
            }

>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
            if (data) {
                res.status(200).json({
                    data: data,
                    success: true,
<<<<<<< HEAD
                    message: 'SuccessFully'
                })
            }
            else {
                res.status(500).json({
                    data: data,
                    success: false,
                    message: 'Server disconected!'
                })
            }
        } catch (error) {

        }

    }
    getListProductCategory = async (req, res) => {
        const params = req.query
        let data
        if (params.sort && params.type) {
            data = await db.Product.findAll({
                include:
                    [{ model: db.Category, where: { slug: params.category } }]
                ,
                order: [
                    [params.sort, params.type],
                ],

            })
        } else {

            data = await db.Product.findAll({
                include:
                    [{ model: db.Category, where: { slug: params.category } }]

            })
=======
                    totalRows: totalRows,
                    limit: limit,
                    message: 'SuccessFully',
                });
            } else {
                res.status(500).json({
                    data: data,
                    success: false,
                    message: 'Server disconected!',
                });
            }
        } catch (error) {}
    };
    getListProductCategory = async (req, res) => {
        const params = req.query;
        let data;
        let limit = 6;
        let totalRows;
        const skip = (params.page - 1) * limit;
        if (params.sort && params.type) {
            const { count, rows } = await db.Product.findAndCountAll({
                include: [{ model: db.Category, where: { slug: params.category } }],
                order: [[params.sort, params.type]],
                offset: skip,
                limit: limit,
            });
            data = rows;
            totalRows = count;
        } else {
            const { count, rows } = await db.Product.findAndCountAll({
                include: [{ model: db.Category, where: { slug: params.category } }],
            });
            data = rows;
            totalRows = count;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
        }

        // res.send(params)
        res.status(200).json({
<<<<<<< HEAD
            data, success: true,
            message: 'successfully'
        })
    }
    getOnlyProduct = async (req, res) => {
        const slug = req.params.slug
        const data = await db.Product.findOne({
            where: { slug: slug },
            include:
                [{ model: db.Category }]
            ,
        })

        res.status(200).json({
            data: data

        })
    }
    getRandome = async (req, res) => {
        const data = await db.Product.findAll({
            order: db.sequelize.random(), limit: 3
        })
        res.status(200).json({
            data, message: 'successfully',
            success: true
        })
    }
    getSearch = async (req, res) => {
        try {
            let data = []
            let { q, type } = req.query
            q = q.toLowerCase()
            if (type === 'less') {
                data = await db.Product.findAll({
                    where: { 'name': { [Op.like]: '%' + q + '%' } },
                    limit: 5
                })

            }
            res.status(200).json({
                data,
                message: ''
            })
        } catch (error) {

        }
    }

}
module.exports = new ProductController
=======
            data,
            success: true,
            message: 'successfully',
            totalRows: totalRows,
            limit,
        });
    };
    getOnlyProduct = async (req, res) => {
        const slug = req.params.slug;
        const data = await db.Product.findOne({
            where: { slug: slug },
            include: [{ model: db.Category }],
        });

        res.status(200).json({
            data: data,
        });
    };
    // lấy danh sạhs sản phâm rrandom
    getRandome = async (req, res) => {
        const data = await db.Product.findAll({
            order: db.sequelize.random(),
            limit: 3,
        });
        res.status(200).json({
            data,
            message: 'successfully',
            success: true,
        });
    };
    // tìm kiếm
    getSearch = async (req, res) => {
        try {
            let data = [];
            let { q, type } = req.query;
            q = q.toLowerCase();
            if (type === 'less') {
                data = await db.Product.findAll({
                    where: { name: { [Op.like]: '%' + q + '%' } },
                    limit: 5,
                });
            }
            res.status(200).json({
                data,
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new ProductController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
