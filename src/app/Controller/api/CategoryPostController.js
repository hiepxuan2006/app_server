<<<<<<< HEAD
const db = require("../../../models")

class CtegoryPostController {

    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({})
=======
const db = require('../../../../models');

class CtegoryPostController {
    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({});
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576

            res.status(200).json({
                data,
                success: true,
<<<<<<< HEAD
                message: ''
            })
        } catch (error) {

        }
    }

}
module.exports = new CtegoryPostController
=======
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new CtegoryPostController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
