'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserOTPVerification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserOTPVerification.init(
        {
            email: DataTypes.STRING,
            otp: DataTypes.STRING,
            expiresAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'UserOTPVerification',
        },
    );
    return UserOTPVerification;
};
