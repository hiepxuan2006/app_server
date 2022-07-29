function sortTable(field, sort) {
<<<<<<< HEAD
<<<<<<< HEAD
    const sorttype = field === sort.column ? sort.type : 'default'
    const icons = {
        default: 'fas fa-sort',
        asc: 'fas fa-sort-amount-down-alt',
        desc: 'fas fa-sort-amount-up-alt'
    }
    const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc'
    }
    const icon = icons[sorttype]
    const type = types[sorttype]
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
    const sorttype = field === sort.column ? sort.type : 'default';
    const icons = {
        default: 'fas fa-sort',
        asc: 'fas fa-sort-amount-down-alt',
        desc: 'fas fa-sort-amount-up-alt',
    };
    const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc',
    };
    const icon = icons[sorttype];
    const type = types[sorttype];
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
    const sorttype = field === sort.column ? sort.type : 'default'
    const icons = {
        default: 'fas fa-sort',
        asc: 'fas fa-sort-amount-down-alt',
        desc: 'fas fa-sort-amount-up-alt'
    }
    const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc'
    }
    const icon = icons[sorttype]
    const type = types[sorttype]
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
    return ` 
    <a href="?_sort&column=${field}&type=${type}" style="float: right;">
    <i class="${icon}"></i>
    </a>
<<<<<<< HEAD
<<<<<<< HEAD
    `
}
module.exports = sortTable
=======
    `;
}
module.exports = sortTable;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
    `;
}
module.exports = sortTable;
=======
    `
}
module.exports = sortTable
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
