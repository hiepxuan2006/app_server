class AdminAuthController {
    login(req, res) {
        return res.render('auth/login', {
<<<<<<< HEAD
            layout: false
=======
            layout: false,
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
        });
    }
    register(req, res) {
        return res.render('auth/register', {
<<<<<<< HEAD
            layout: false
        });
    }
}
module.exports = new AdminAuthController
=======
            layout: false,
        });
    }
}
module.exports = new AdminAuthController();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
