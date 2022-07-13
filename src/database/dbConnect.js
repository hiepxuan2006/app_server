<<<<<<< HEAD
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
=======
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
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
