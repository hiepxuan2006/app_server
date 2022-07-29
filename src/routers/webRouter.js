
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

    // ////////////
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
            status: err.status,
            message: err.message,
        });
    });

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
                            url: `${process.env.URL}${url}`,
                        });

                    }
                })})}
         catch (error) {
            
        }
    })
}
module.exports= route