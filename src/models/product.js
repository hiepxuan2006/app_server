'use strict';
const {
    Model
} = require('sequelize');
const category = require('./category')
const db = require('../models')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Product.belongsTo(models.Category, { foreignKey: 'category_id', })
            // models.Category.hasMany(Product, { foreignKey: 'category_id', as: 'cate_' })
        }
    }
    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        feature_image_path: DataTypes.STRING,
        content: DataTypes.TEXT,
        slug: DataTypes.STRING,
        user_id: DataTypes.STRING,
        category_id: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};