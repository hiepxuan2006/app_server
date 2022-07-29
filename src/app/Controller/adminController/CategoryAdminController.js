const ChangeToSlug = require('../../../hepers/toSlug');
const db = require('../../../../models');

class CategoryAdminController {
    // danh sachs category
    getCategories = async (req, res) => {
        try {
            let { page, limit } = req.query;

            if (!page && !limit) {
                const dataAll = await db.Category.findAll({});
                return res.status(200).json({
                    success: true,
                    message: 'Successfuly',
                    data: dataAll,
                });
            }
            const skip = (page - 1) * limit;
            console.log(limit);
            let data = await db.Category.findAndCountAll({
                offset: skip,
                limit: parseInt(limit),
            });

            if (data) {
                res.status(200).json({
                    data: data.rows,
                    limit: limit,
                    totalRows: data.count,
                    success: true,
                    message: 'Successfully',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    getCategory = async (req, res) => {
        try {
            const { id } = req.query;
            const data = await db.Category.findOne({
                where: { id: id },
            });
            res.status(200).json({
                data,
                success: true,
                message: 'successfuly',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    addCtegory = async (req, res) => {
        try {
            const { name } = req.body;
            const newCategory = {
                name: name,
                parent_id: 0,
                image_path:
                    `upload/${req.files.image_path[0].filename}` || null,
                slug: ChangeToSlug(name),
            };
            await db.Category.create(newCategory);
            console.log(req.files.image_path[0]);
            res.status(200).json({
                success: true,
                message: 'Thêm thành công',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    delCategory = async (req, res) => {
        const { id } = req.query;
        try {
            const category = await db.Category.destroy({
                where: { id: id },
            });
            if (category) {
                res.status(200).json({
                    success: true,
                    message: 'Xóa thành công !',
                });
            } else {
                res.status(402).json({
                    success: false,
                    message: 'Vui lòng chọn lại !',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
    updateCategory = async (req, res) => {
        try {
            const { id } = req.params;
            const params = req.body;
            const dataUpdate = await db.Category.findOne({
                where: { id },
            });
            if (!dataUpdate) {
                res.status(400).json({
                    success: false,
                    message: 'Lỗi! không tìm thấy bản ghi bạn muốn xóa',
                });
            }
            if (params.name) dataUpdate.name = params.name;
            if (req.files.image_path)
                dataUpdate.image_path = `upload/${req.files.image_path[0].filename}`;

            const isUpdate = await dataUpdate.save();
            if (isUpdate) {
                res.status(200).json({
                    success: true,
                    message: 'cập nhật thành công!',
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'cập nhật không thành công!',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false,
            });
        }
    };
}

module.exports = new CategoryAdminController();
