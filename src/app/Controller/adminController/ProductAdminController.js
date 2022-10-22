const ChangeToSlug = require('../../../hepers/toSlug');
const db = require('../../../../models');

class ProductAdminController {
    getListProduct = async (req, res) => {
        const { page, limit,categoryId } = req.query;
        let data
        const skip = (page - 1) * limit;
        if(categoryId){
            data = await db.Product.findAndCountAll({
                include: [{ model: db.Category ,where:{id:categoryId}}],
                offset: skip,
                limit: parseInt(limit),
            });
        }else{
            data = await db.Product.findAndCountAll({
                include: [{ model: db.Category }],
                offset: skip,
                limit: parseInt(limit),
            });

        }
        if (data) {
            res.status(200).json({
                data: data.rows,
                success: true,
                totalRows: data.count,
                limit: limit,
                message: 'SuccessFully',
            });
        }
    };
    delProduct = async (req, res) => {
        try {
            const { id } = req.query;
            const isDel = await db.Product.destroy({ where: { id } });
            if (isDel) {
                res.status(200).json({
                    success: true,
                    message: 'Đã xóa thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Lỗi! vui lòng thwucj hiện lại !',
            });
        }
    };
    addProduct = async (req, res) => {
        try {
            const { name, price, category_id, content } = req.body;

            const newProduct = {
                name,
                price,
                feature_image_path: `upload/${req.files.image_path[0].filename}`,
                content,
                category_id,
                slug: ChangeToSlug(name),
            };
            await db.Product.create(newProduct);
            res.status(200).json({
                success: true,
                message: 'Thêm sản phẩm thành công',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    getProduct = async (req, res) => {
        try {
            const { id } = req.query;
            const product = await db.Product.findOne({
                include: [{ model: db.Category }],
                where: { id },
            });
            if (product) {
                res.status(200).json({
                    data: product,
                    success: true,
                    message: 'successfully',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    updateProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const params = req.body;
            const data = await db.Product.findOne({
                where: { id },
            });
            const update = {};
            if (params.name) {
                update.name = params.name;
                update.slug = ChangeToSlug(params.name);
            }
            if (params.price) {
                update.price = params.price;
            }
            if (params.category_id) update.category_id = params.category_id;
            if (params.content) update.content = params.content;
            if (req.files.image_path)
                update.feature_image_path = `upload/${req.files.image_path[0].filename}`;
            const isupdate = await data.update(update);
            if (isupdate) {
                res.status(200).json({
                    success: true,
                    message: 'Cập nhật thành công',
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Cập nhật không thành công',
                });
            }
        } catch (error) {}
    };
}
module.exports = new ProductAdminController();
