class AdminAuthController {
    login(req, res) {
        return res.render('auth/login', {
<<<<<<< HEAD
<<<<<<< HEAD
            layout: false
=======
            layout: false,
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
            layout: false,
=======
            layout: false
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        });
    }
    register(req, res) {
        return res.render('auth/register', {
<<<<<<< HEAD
<<<<<<< HEAD
            layout: false
        });
    }
}
module.exports = new AdminAuthController
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            layout: false,
        });
    }
}
module.exports = new AdminAuthController();
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
            layout: false
        });
    }
}
module.exports = new AdminAuthController
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
