<<<<<<< HEAD
<<<<<<< HEAD
=======
const db = require('../../../../models');

class CtegoryPostController {
    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({});
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const db = require("../../../models")

class CtegoryPostController {

    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({})
<<<<<<< HEAD
=======
const db = require('../../../../models');

class CtegoryPostController {
    getlist = async (req, res) => {
        try {
            const data = await db.CategoryPost.findAll({});
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

            res.status(200).json({
                data,
                success: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new CtegoryPostController();
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: ''
            })
        } catch (error) {

        }
    }

}
module.exports = new CtegoryPostController
<<<<<<< HEAD
=======
                message: '',
            });
        } catch (error) {}
    };
}
module.exports = new CtegoryPostController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
