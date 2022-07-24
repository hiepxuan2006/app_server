'use strict';
const { Model } = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
    class Order_item extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order_item.belongsTo(models.Order, { foreignKey: 'order_id' });
            Order_item.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }
    Order_item.init(
        {
            order_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: db.Order,
                    key: 'id',
                },
            },
            product_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: db.Product, // 'Movies' would also work
                    key: 'id',
                },
            },
            quantity: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Order_item',
        },
    );
    return Order_item;
};
