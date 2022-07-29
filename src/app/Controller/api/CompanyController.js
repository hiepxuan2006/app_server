<<<<<<< HEAD
<<<<<<< HEAD
const db = require("../../../models")
=======
const db = require('../../../../models');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
const db = require('../../../../models');
=======
const db = require("../../../models")
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

class CompanyController {
    getlist = async (req, res) => {
        try {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
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
<<<<<<< HEAD
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
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
