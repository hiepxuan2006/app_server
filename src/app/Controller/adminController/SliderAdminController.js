const db = require('../../../../models');

class SliderAdminController {
    getAllSlider = async (req, res) => {
        try {
            const data = await db.Slider.findAll();
            if (data) {
                res.status(200).json({
                    data,
                    success: true,
                    message: 'thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false,
            });
        }
    };
    addSlider = async (req, res) => {
        try {
            const { name } = req.body;
            const image_path = `upload/${req.files.image_path[0].filename}`;
            const newSlider = {
                name: name,
                image_path: image_path,
            };
            const data = await db.Slider.create(newSlider);
            if (data) {
                res.status(200).json({
                    success: true,
                    message: 'Thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false,
            });
        }
    };
    DelSlider = async (req, res) => {
        try {
            const { id } = req.query;
            const data = await db.Slider.destroy({
                where: { id },
            });
            if (data) {
                res.status(200).json({
                    success: true,
                    message: 'Thành công',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message,
                success: false,
            });
        }
    };
}
module.exports = new SliderAdminController();
