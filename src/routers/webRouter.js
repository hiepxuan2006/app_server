const sortMiddleware = require('../app/Middleware/SortMiddlewar')
const adminAuth = require('../routers/Local/adminAuth')
const category = require('../routers/Local/category')
const categoryPost = require('../routers/Local/categoryPost')
const product = require('../routers/Local/product')
const post = require('../routers/Local/post')
const company = require('../routers/Local/company')
const slider = require('../routers/Local/Slider')
// start route api
const apiCategory = require('../routers/api/Category')
const apiProduct = require('../routers/api/Product')
const apiCategoryPost = require('../routers/api/categoryPost')
const apiCompany = require('../routers/api/Company')
const apiSlider = require('../routers/api/Slider')
// end route api
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');
const path = require('path')

function route(app) {
    app.use('/admin', adminAuth)
    app.use('/admin/category', sortMiddleware, category)
    app.use('/admin/danh-muc-bai-viet', categoryPost)
    app.use('/admin/product', product)
    app.use('/admin/post', post)
    app.use('/admin/company', company)
    app.use('/admin/slider', slider)
    app.get('/admin', (req, res) => {
        return res.render('home')
    })
    //api----------------------------------------------
    app.use('/api/category', apiCategory)
    app.use('/api/product', apiProduct)
    app.use('/api/categorypost', apiCategoryPost)
    app.use('/api/company', apiCompany)
    app.use('/api/Slider', apiSlider)




    // up load anh bai pót 
    app.post('/upload', multipartMiddleware, (req, res) => {
        try {
            fs.readFile(req.files.upload.path, function (err, data) {
                var newPath = 'public/upload/' + req.files.upload.name;
                fs.writeFile(newPath, data, function (err) {
                    if (err) console.log({ err: err });
                    else {
                        let fileName = req.files.upload.name;
                        let url = '/upload/' + fileName;
                        let msg = 'Upload successfully';
                        let funcNum = req.query.CKEditorFuncNum;
                        console.log({ url, msg, funcNum });
                        res.status(201).send("<script>window.parent.CKEDITOR.tools.callFunction('" + funcNum + "','" + url + "','" + msg + "');</script>");
                    }
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    })
}
module.exports = route