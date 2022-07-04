class AdminAuthController {
    login(req, res) {
        return res.render('auth/login', {
            layout: false
        });
    }
    register(req, res) {
        return res.render('auth/register', {
            layout: false
        });
    }
}
module.exports = new AdminAuthController