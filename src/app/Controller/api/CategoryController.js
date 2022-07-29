<<<<<<< HEAD
<<<<<<< HEAD
const db = require("../../../models")
=======
const db = require('../../../../models');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
const ChangeToSlug = require('../../../hepers/toSlug');
const db = require('../../../../models');

class CategoryController {
    // danh sachs category
    getCategories = async (req, res) => {
        try {
            const dataAll = await db.Category.findAll({});
            return res.status(200).json({
                success: true,
                message: 'Successfuly',
                data: dataAll,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };
}

module.exports = new CategoryController();
=======
const db = require("../../../models")
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1

class CategoryController {
    // danh sachs category
    getCategory = async (req, res) => {
        let data = await db.Category.findAll({
<<<<<<< HEAD
<<<<<<< HEAD
            raw: true
        })
=======
            raw: true,
        });
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
            raw: true
        })
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        if (data) {
            res.status(200).json({
                data: data,
                success: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
                message: 'Successfully'
            })
        }
        else {
            res.status(500).json(
                {
                    success: false,
                    message: 'faile'
                }
            )
        }
    }
}
module.exports = new CategoryController
<<<<<<< HEAD
=======
                message: 'Successfully',
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'faile',
            });
        }
    };
}
module.exports = new CategoryController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
