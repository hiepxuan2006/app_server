const db = require('../../../models');
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
                    limit: parseInt(limit),
                });
                data = rows;
                totalRows = count;
            } else {
                const { count, rows } = await db.Product.findAndCountAll({
                    include: [{ model: db.Category }],
                    offset: skip,
                    limit: parseInt(limit),
                });
                data = rows;
                totalRows = count;
            }

            if (data) {
                res.status(200).json({
                    data: data,
                    success: true,
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
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    getListProductCategory = async (req, res) => {
        try {
            const params = req.query;
            let data;
            let limit = 6;
            let totalRows;
            const skip = (params.page - 1) * limit;
            if (params.sort && params.type) {
                const { count, rows } = await db.Product.findAndCountAll({
                    include: [
                        {
                            model: db.Category,
                            where: { slug: params.category },
                        },
                    ],
                    order: [[params.sort, params.type]],
                    offset: skip,
                    limit: limit,
                });
                data = rows;
                totalRows = count;
            } else {
                const { count, rows } = await db.Product.findAndCountAll({
                    include: [
                        {
                            model: db.Category,
                            where: { slug: params.category },
                        },
                    ],
                });
                data = rows;
                totalRows = count;
            }
            res.status(200).json({
                data,
                success: true,
                message: 'successfully',
                totalRows: totalRows,
                limit,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        // res.send(params)
    };
    getOnlyProduct = async (req, res) => {
        try {
            const slug = req.params.slug;
            const data = await db.Product.findOne({
                where: { slug: slug },
                include: [{ model: db.Category }],
            });

            res.status(200).json({
                data: data,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    // lấy danh sạhs sản phâm rrandom
    getRandome = async (req, res) => {
        let { limit = 3 } = req.query;
        const data = await db.Product.findAll({
            order: db.sequelize.random(),
            limit: limit,
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
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    // xoas
}
module.exports = new ProductController();
