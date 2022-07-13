'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PassReset extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PassReset.init(
        {
            user_id: DataTypes.STRING,
            stringReset: DataTypes.STRING,
            expiresAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'PassReset',
        },
    );
    return PassReset;
};
