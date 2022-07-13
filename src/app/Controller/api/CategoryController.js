<<<<<<< HEAD
const db = require("../../../models")
=======
const db = require('../../../../models');
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576

class CategoryController {
    // danh sachs category
    getCategory = async (req, res) => {
        let data = await db.Category.findAll({
<<<<<<< HEAD
            raw: true
        })
=======
            raw: true,
        });
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
        if (data) {
            res.status(200).json({
                data: data,
                success: true,
<<<<<<< HEAD
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
