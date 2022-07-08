const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db1o0qfi0qejsc', 'vndjxwxpdcdzzv', '12adc4e5a3266fbedfa1bd1f198b222dc3226269468a78369e6a4df4db327ab9', {
    host: 'ec2-52-20-166-21.compute-1.amazonaws.com',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,

    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }

});
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB