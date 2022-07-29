<<<<<<< HEAD
const mysql = require('mysql');
const config = require('../config/connectDB');
const db = postgres.createConnection(config.postgres);

module.exports = {
    load: (sql) => {
        return new Promise((resolve, reject) => {
            db.connect();
            db.query(sql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
                db.end();
            });
        });
    },
    // add: (tableName, )
};
module.exports = db;
=======
const mysql = require('mysql')
const config = require('../config/db')
const db = mysql.createConnection(config.mysql);

module.exports = {
    load: sql => {
        return new Promise((resolve, reject) => {
            db.connect()
            db.query(sql, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
                db.end()
            })

        })
    },
    // add: (tableName, )
}
module.exports = db
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
