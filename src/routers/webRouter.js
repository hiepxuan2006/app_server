const sortMiddleware = require('../app/Middleware/SortMiddlewar');
const adminAuth = require('../routers/Local/adminAuth');
const category = require('../routers/Local/category');
const categoryPost = require('../routers/Local/categoryPost');
const product = require('../routers/Local/product');
const post = require('../routers/Local/post');
const company = require('../routers/Local/company');
const slider = require('../routers/Local/Slider');
// start route api
const apiCategory = require('../routers/api/Category');
const apiProduct = require('../routers/api/Product');
const apiCategoryPost = require('../routers/api/categoryPost');
const apiCompany = require('../routers/api/Company');
const apiSlider = require('../routers/api/Slider');
const apiAcount = require('../routers/api/acount');
const apiOrder = require('../routers/api/Order');
// end route api
// api admin
const apiAdminCategory = require('../routers/admin/apiAdminCategory');
const apiAdminProduct = require('../routers/admin/apiAdminProduct');
const apiAdminOrder = require('../routers/admin/apiAdminOrder');
const apiAdminSlider = require('../routers/admin/sliderAdmin');
const apiAcountAdmin = require('../routers/admin/acountAdmin');

// end api admin
const multipart = require('connect-multiparty');
const fs = require('fs');
const path = require('path');
const multipartMiddleware = multipart();

function route(app) {
    app.use('/admin', adminAuth);
    app.use('/admin/category', sortMiddleware, category);
    app.use('/admin/danh-muc-bai-viet', categoryPost);
    app.use('/admin/product', product);
    app.use('/admin/post', post);
    app.use('/admin/company', company);
    app.use('/admin/slider', slider);
    app.get('/admin', (req, res) => {
        return res.render('home');
    });
    //api----------------------------------------------
    app.use('/api/category', apiCategory);
    app.use('/api/product', apiProduct);
    app.use('/api/categorypost', apiCategoryPost);
    app.use('/api/company', apiCompany);
    app.use('/api/slider', apiSlider);
    app.use('/api/acount', apiAcount);
    app.use('/api/order', apiOrder);
    // api admin
    app.use('/api/admin/category', apiAdminCategory);
    app.use('/api/admin/product', apiAdminProduct);
    app.use('/api/admin/order', apiAdminOrder);
    app.use('/api/admin/slider', apiAdminSlider);
    app.use('/api/admin/acount', apiAcountAdmin);

    // up load anh bai pót
    app.post('/upload', multipartMiddleware, (req, res) => {
        try {
            fs.readFile(req.files.upload.path, function (err, data) {
                var newPath = 'public/upload/images/' + req.files.upload.name;
                fs.writeFile(newPath, data, function (err) {
                    if (err) console.log({ err: err });
                    else {
                        console.log(data);
                        let fileName = req.files.upload.name;
                        let url = '/upload/images/' + fileName;
                        res.status(201).json({
                            uploaded: true,
                            url: `http://localhost:8080${url}`,
                        });
                    }
                });
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    });
}
module.exports = route;
