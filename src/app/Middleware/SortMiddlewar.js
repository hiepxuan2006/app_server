function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    }
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column
        })
    }
    next()
}

function seachMiddleware(req, res, next) {
    res.locals._seach = {
        enabled: false,
        type: 'default'
    }
    if (req.query.hasOwnProperty('_seach')) {
        Object.assign(res.locals.seach, {
            enabled: true,
            type: req.query.role_id,
            column: req.query.keywords
        })
    }
    next()
}
module.exports = sortMiddleware