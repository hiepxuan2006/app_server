<<<<<<< HEAD
const db = require('../../../../models');

class CtegoryPostController {
    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({});
=======
const db = require("../../../models")

class CtegoryPostController {

    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({})
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665

            res.status(200).json({
                data,
                success: true,
<<<<<<< HEAD
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new CtegoryPostController();
=======
                message: ''
            })
        } catch (error) {

        }
    }

}
module.exports = new CtegoryPostController
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
