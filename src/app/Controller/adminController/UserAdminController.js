const createError = require('http-errors')
const db = require('../../../../models')


class UserAdminController{
getListUser=async(req,res,next)=>{
    try {
        const data =await db.User.findAll({
            // where:{isAdmin:false},
            include:[{model:db.Order,include:[{model:db.Product}]}],
            attributes: { exclude: ['password'] },
        })
        res.status(200).json({
            success:true,
            message:'Thành công!',
            data
        })
    } catch (error) {
        next(createError.InternalServerError('Lỗi ! Vui lòng thử lại!'))
    }
}
}
module.exports = new UserAdminController