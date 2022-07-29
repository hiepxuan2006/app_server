<<<<<<< HEAD
const db = require('../../../../models');
=======
const db = require("../../../models")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665

class CompanyController {
    getlist = async (req, res) => {
        try {
<<<<<<< HEAD
            const data = await db.Company.findAll({});
            res.status(200).json({
                data,
                success: true,
            });
        } catch (error) {}
    };
    getCompany = async (req, res) => {
        try {
            const { company } = req.params;
            const data = await db.Company.findOne({
                where: { slug: company },
            });

            res.status(200).json({
                data,
                success: true,
            });
        } catch (error) {}
    };
}
module.exports = new CompanyController();
=======
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
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
