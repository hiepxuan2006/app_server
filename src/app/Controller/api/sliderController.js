const db = require('../../../models');

class SliderControoler {
    getList = async (req, res) => {
        try {
            const data = await db.Slider.findAll({});
            if (data)
                res.status(200).json({
                    data,
                    success: true,
                });
        } catch (error) {}
    };
}
module.exports = new SliderControoler();
