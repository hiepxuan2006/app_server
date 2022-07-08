const db = require("../../../models")

class CompanyController {
    getlist = async (req, res) => {
        try {
            const data = await db.Company.findAll({})
            res.status(200).json({
                data,
                success: true
            })
        } catch (error) {

        }
    }
    getCompany = async (req, res) => {
        try {
            const { company } = req.params
            const data = await db.Company.findOne({
                where: { slug: company }
            })

            res.status(200).json({
                data,
                success: true
            })
        } catch (error) {

        }
    }
}
module.exports = new CompanyController