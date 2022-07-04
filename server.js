const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const hbs_sections = require('express-handlebars-sections');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
const path = require('path');
const sortTable = require('./hepers/sortTable');
require('dotenv').config()
const route = require('./routers/webRouter');
const connectDB = require('./config/connectDB');
const db = require('./models/index');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');

const PORT = process.env.PORT || 5000

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
app.set('views', path.join(__dirname, 'resources', 'view'));
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