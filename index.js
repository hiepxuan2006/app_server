const express = require('express');
var cors = require('cors');
const app = express();
const handlebars = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const path = require('path');
const sortTable = require('./src/hepers/sortTable');
require('dotenv').config();
const route = require('./src/routers/webRouter');
const connectDB = require('./config/connectDB');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');

<<<<<<< HEAD:index.js
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
=======
const PORT = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
>>>>>>> 5ca73dd8 (make it better 3):server.js

// parse application/json
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            section: hbs_sections(),
            sortTable: sortTable,
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources', 'view'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/stylesheets/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.get('/', (req, res) => {
    return res.send('hello');
});

route(app);
connectDB();
app.listen(PORT, () => {
    console.log('server start');
});
