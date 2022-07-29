function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
<<<<<<< HEAD
<<<<<<< HEAD
        type: 'default'
    }
=======
        type: 'default',
    };
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
        type: 'default',
    };
=======
        type: 'default'
    }
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
<<<<<<< HEAD
<<<<<<< HEAD
            column: req.query.column
        })
    }
    next()
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            column: req.query.column,
        });
    }
    next();
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
            column: req.query.column
        })
    }
    next()
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
}

function seachMiddleware(req, res, next) {
    res.locals._seach = {
        enabled: false,
<<<<<<< HEAD
<<<<<<< HEAD
        type: 'default'
    }
=======
        type: 'default',
    };
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
        type: 'default',
    };
=======
        type: 'default'
    }
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
    if (req.query.hasOwnProperty('_seach')) {
        Object.assign(res.locals.seach, {
            enabled: true,
            type: req.query.role_id,
<<<<<<< HEAD
<<<<<<< HEAD
            column: req.query.keywords
        })
    }
    next()
}
module.exports = sortMiddleware
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
            column: req.query.keywords,
        });
    }
    next();
}
module.exports = sortMiddleware;
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
            column: req.query.keywords
        })
    }
    next()
}
module.exports = sortMiddleware
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
