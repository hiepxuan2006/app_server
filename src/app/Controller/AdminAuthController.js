class AdminAuthController {
    login(req, res) {
        return res.render('auth/login', {
<<<<<<< HEAD
            layout: false,
=======
            layout: false
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
        });
    }
    register(req, res) {
        return res.render('auth/register', {
<<<<<<< HEAD
            layout: false,
        });
    }
}
module.exports = new AdminAuthController();
=======
            layout: false
        });
    }
}
module.exports = new AdminAuthController
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
