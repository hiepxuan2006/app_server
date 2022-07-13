function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
<<<<<<< HEAD
        type: 'default'
    }
=======
        type: 'default',
    };
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
<<<<<<< HEAD
            column: req.query.column
        })
    }
    next()
=======
            column: req.query.column,
        });
    }
    next();
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
}

function seachMiddleware(req, res, next) {
    res.locals._seach = {
        enabled: false,
<<<<<<< HEAD
        type: 'default'
    }
=======
        type: 'default',
    };
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
    if (req.query.hasOwnProperty('_seach')) {
        Object.assign(res.locals.seach, {
            enabled: true,
            type: req.query.role_id,
<<<<<<< HEAD
            column: req.query.keywords
        })
    }
    next()
}
module.exports = sortMiddleware
=======
            column: req.query.keywords,
        });
    }
    next();
}
module.exports = sortMiddleware;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
