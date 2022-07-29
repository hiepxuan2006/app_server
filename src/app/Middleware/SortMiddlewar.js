function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
<<<<<<< HEAD
        type: 'default',
    };
=======
        type: 'default'
    }
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
<<<<<<< HEAD
            column: req.query.column,
        });
    }
    next();
=======
            column: req.query.column
        })
    }
    next()
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
}

function seachMiddleware(req, res, next) {
    res.locals._seach = {
        enabled: false,
<<<<<<< HEAD
        type: 'default',
    };
=======
        type: 'default'
    }
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
    if (req.query.hasOwnProperty('_seach')) {
        Object.assign(res.locals.seach, {
            enabled: true,
            type: req.query.role_id,
<<<<<<< HEAD
            column: req.query.keywords,
        });
    }
    next();
}
module.exports = sortMiddleware;
=======
            column: req.query.keywords
        })
    }
    next()
}
module.exports = sortMiddleware
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
