const db = require('../../../../models');

class OrderAdminController {
    getAllOrder = async (req, res) => {
        try {
            const data = await db.Order.findAll({
                include: [
                    { model: db.Customer },
                    { model: db.Product },
                    { model: db.User, attributes: { exclude: ['password'] } },
                ],
                order:[['createdAt','desc']]
            });
            if (data) {
                res.status(200).json({
                    data,
                    success: true,
                    message: 'successfully',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    };
    getOrder = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await db.Order.findOne({
                where: { id },
                include: [
                    { model: db.Customer },
                    { model: db.Product },
                    { model: db.User },
                ],
            });
            if (data) {
                res.status(200).json({
                    data,
                    success: true,
                    message: 'Thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    };
    updateStatus = async (req, res) => {
        try {
            const { id, status } = req.body;
            const data = await db.Order.findOne({
                where: { id },
            });
            if (data) {
                await data.update({ status: status });
                res.status(200).json({
                    success: true,
                    message: 'Thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    };
}
module.exports = new OrderAdminController();
