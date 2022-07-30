const ChangeToSlug = require("../../../hepers/toSlug")
const createError = require('http-errors');
const db = require("../../../../models");
class CompanyAdminController{


    addCompany = async(req,res,next)=>{
       try {
        const {name,description}=req.body
        const newCOmpany = {
            name:name,
            image_detail: `upload/${req.files.image_path[0].filename}`,
            description,
            slug:ChangeToSlug(name)
        }
        const data = await db.Company.create(newCOmpany)
        if(data){

            res.status(200).json({
                message:'Thành công',
                success:true,
            })
        }else{
            next(createError(400,'Thất bại!'))
        }
       
       } catch (error) {
       
        next(createError(500,error.message))
        
       }
    }
    getCompany=async(req,res,next)=>{
         try {
            const {id}=req.query 
            const data = await db.Company.findOne({
                where:{id}
            })
            if(data){
                res.status(200).json({
                    message:'Thành công',
                    success:true,
                    data
                })
            }else{
                next(createError(400,'Thất bại'))
            }
         } catch (error) {
            next(createError(500,error.message))
         }
    }
    getListCompany = async(req,res)=>{
        try {
            const data=await db.Company.findAll({})
            if(data){
                res.status(200).json({
                    message:'Thành công!',
                    success:true,
                    data:data
                })
            }
        } catch (error) {
            next(createError.InternalServerError('Lỗi! Vui lòng thử lại'))
        }
    }
}
module.exports = new CompanyAdminController