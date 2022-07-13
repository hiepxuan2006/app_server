<<<<<<< HEAD
const db = require("../../../models")
=======
const db = require('../../../../models');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576

class CompanyController {
    getlist = async (req, res) => {
        try {
<<<<<<< HEAD
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
=======
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
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
