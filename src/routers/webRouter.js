const multipart = require('connect-multiparty');
const fs = require('fs');
const path = require('path');
const multipartMiddleware = multipart();

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
const apiAdminCategory = require('./apiAdmin/RouterAdminCategory');
const apiAdminProduct = require('./apiAdmin/RouterAdminProduct');
const apiAdminOrder = require('./apiAdmin/RouterAdminOrder');
const apiAdminSlider = require('./apiAdmin/RouterSliderAdmin');
const apiAcountAdmin = require('./apiAdmin/RouterAcountAdmin');
const apiCompanyAdmin = require('./apiAdmin/RouterCompanyAdmin');
const apiUserAdmin = require('./apiAdmin/RouterUserAdmin');

// end api admin

function route(app) {
   
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
    app.use('/api/admin/company', apiCompanyAdmin);
    app.use('/api/admin/user', apiUserAdmin);

    // ////////////
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
            status: err.status,
            message: err.message,
        });
    });

    // up load anh bai product
    app.post('/upload', multipartMiddleware, (req, res) => {
        try {
            fs.readFile(req.files.upload.path, function (err, data) {
                var newPath = 'public/upload/images/' + req.files.upload.name;
                fs.writeFile(newPath, data, function (err) {
                    if (err) console.log({ err: err });
                    else {
                        let fileName = req.files.upload.name;
                        let url = '/upload/images/' + fileName;
                        res.status(201).json({
                            uploaded: true,
                            url: `${process.env.URL}${url}`,
                        });

                    }
                })})}
         catch (error) {
            
        }
    })
}
module.exports= route