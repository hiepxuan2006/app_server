const db = require('../../../models');

class CategoryController {
    index = async (req, res) => {
        let data = await db.Slider.findAll({
            raw: true,
        });
        // if (req.query.hasOwnProperty('_sort')) {
        //     data = await db.Category.findAll({
        //         order: [
        //             [req.query.column, req.query.type]
        //         ]
        //     })
        // }
        return res.render('slider/indexSlider', { data });
    };
    add = async (req, res) => {
        return res.render('slider/addSlider');
    };
    store = async (req, res) => {
        const data = req.body;
        const newCtegory = {
            name: data.name,
            image_path: req.files.feature_image_path[0].path.replace(
                'public\\',
                '/',
            ),
        };
        const isCreate = await db.Slider.create(newCtegory);
        return res.redirect('back');
    };
    edit = async (req, res) => {
        const id = req.params.id;
        let data = await db.Slider.findAll({
            where: {
                id: id,
            },
        });
        res.render('slider/editSlider', { data });
    };
    delete = async (req, res) => {
        const id = req.params.id;
        const isdel = await db.Slider.destroy({
            where: {
                id,
            },
        });
        if (isdel) {
            res.status(200).json({
                success: true,
                message: 'Thành công!',
            });
        }
    };
}
module.exports = new CategoryController();
