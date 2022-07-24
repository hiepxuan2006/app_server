const { v4: uuidv4 } = require('uuid');
const sendEmail = require('../../../hepers/sendEmail');
const db = require('../../../models');
const OrderController = {
    postOrder: async (req, res) => {
        try {
            const data = req.body;
            console.log(!data.user);
            let customer;
            if (!data.user_id) {
                customer = await db.Customer.findOne({
                    where: { email: data.email },
                });
                if (!customer) {
                    const newCustomer = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                    };
                    customer = await db.Customer.create(newCustomer);
                }
            }
            const newOrder = {
                user_id: data.user_id ? data.user_id : null,
                customer_id: data.user_id ? null : customer.id,
                price_total: data.price_total,
                status: 'Đơn mới',
                address: data.address,
                phone: data.phone,
                ma_dh: uuidv4(),
            };
            const OrderNew = await db.Order.create(newOrder);

            data.product.forEach(async (element) => {
                const order_item = {
                    order_id: OrderNew.id,
                    product_id: element.product.id,
                    quantity: element.quantity,
                };

                await db.Order_item.create(order_item);
            });
            const mailNotifyOrder = {
                from: '"HX-Farm 👻" hiepxuan2605@gmail.com', // sender address
                to: ` ${data.email}`, // list of receivers
                subject: 'Thông tin đơn hàng ✔', // Subject line
                // text: "Hello world?", // plain text body
                html: `  <p>Cảm ơn bạn đã đặt hàng của chúng tôi!</p>
                <h4>Đơn hàng của bạn bao gồm:</h4>
              
                ${data.product.map((item) => {
                    return `<div>
                            <div>${item.product.product_name}*  ${
                        item.quantity
                    } = ${
                        parseInt(item.quantity) * parseInt(item.product.price)
                    } đồng</div>
                        </div>`;
                })}
               
                <h2>Tổng hóa đơn:${data.price_total} đồng</h2>
                ${
                    data.user_id
                        ? ''
                        : `Mã đơn hàng của bạn là ${OrderNew.ma_dh}`
                }
                <p>Trong vài ngày tới bạn vui lòng để ý điện thoại nhận hàng giúp chúng tôi</p>
                <p>cảm ơn! chúc bạn có những bữa ăn tuyệt vời</p>`, // html body
            };
            sendEmail(mailNotifyOrder);
            res.status(200).json({
                success: true,
                message: 'Thêm sản phẩm thành công !',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    getOrder: async (req, res) => {
        try {
            const { email } = req.body;
            const { status, type } = req.query;
            const data = await db.Order.findAll({
                include: [
                    {
                        model: db.User,
                        where: { email },
                        attributes: { exclude: ['password'] },
                    },
                    { model: db.Product },
                ],
                order: [['createdAt', 'desc']],
            });
            if (data) {
                res.status(200).json({
                    data,
                    success: true,
                    message: 'Thành công!',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
    searchOrder: async (req, res) => {
        try {
            const { ma_dh } = req.body;
            const data = await db.Order.findAll({
                where: { ma_dh },
                include: [{ model: db.Customer }, { model: db.Product }],
            });
            if (data) {
                res.status(200).json({
                    message: 'Thành công',
                    success: true,
                    data,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    },
};
module.exports = OrderController;
