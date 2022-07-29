class AdminAuthController {
    login(req, res) {
        return res.render('auth/login', {


     
        });
    }
    register(req, res) {
        return res.render('auth/register', {


      
        });
    }
}
module.exports = new AdminAuthController

