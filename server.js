const express = require('express')
var cors = require('cors')
const app = express()
const handlebars = require('express-handlebars')
const hbs_sections = require('express-handlebars-sections');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
const path = require('path');
const sortTable = require('./src/hepers/sortTable');
require('dotenv').config()
const route = require('./src/routers/webRouter');
const connectDB = require('./src/config/connectDB');
const db = require('./src/models/index');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            section: hbs_sections(),
            sortTable: sortTable,
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources', 'view'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/stylesheets/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.get('/', (req, res) => {
    return res.redirect('admin')
})

connectDB()
route(app)
app.listen(PORT, () => {
    console.log('server start')
})