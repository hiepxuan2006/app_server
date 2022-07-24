'use strict';
const { Model } = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Order.belongsToMany(models.Product, {
                through: models.Order_item,
                foreignKey: 'order_id',
            });
            Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
            Order.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }
    Order.init(
        {
            user_id: DataTypes.STRING,
            customer_id: DataTypes.STRING,
            price_total: DataTypes.STRING,
            status: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            ma_dh: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Order',
        },
    );
    return Order;
};
