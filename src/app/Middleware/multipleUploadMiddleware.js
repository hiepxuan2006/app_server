const util = require("util");
const multer = require("multer");
// Khởi tạo biến cấu hình cho việc lưu trữ file upload
let storage = multer.diskStorage({
    // Định nghĩa nơi file upload sẽ được lưu lại
    destination: (req, file, callback) => {
        callback(null, 'public/upload');
    },
    filename: (req, file, callback) => {

        callback(null, Date.now() + 'hiepxuan' + file.originalname);
    }
});
const fileFilter = (req, file, callback) => {
    if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/gif" || file.mimetype == "image/gif" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/webp ") {
        callback(null, true)
    } else {
        return callback(new Error('Only image are allowed!'))
    }
}
const upload = multer({
        storage: storage,
        limits: {
            fieldSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    })
    // const multipleUpload = upload.fields([{ name: 'fileImage' }, { maxCount: 20 },])
const multipleUpload = upload.fields([{ name: 'feature_image_path' }, { name: 'image_path[]', maxCount: 4 }])

// Bên trong hàm .array() truyền vào name của thẻ input, ở đây mình đặt là "many-files", và tham số thứ hai là giới hạn số file được phép upload mỗi lần, mình sẽ để là 17 (con số mà mình yêu thích). Các bạn thích để bao nhiêu cũng được.
let uploadManyFiles = multer({ storage: storage }).array("image_path", 17);
let multipleUploadMiddleware = util.promisify(multipleUpload);
module.exports = multipleUploadMiddleware;