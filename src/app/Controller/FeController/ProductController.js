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
        }

        // res.send(params)
        res.status(200).json({
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
