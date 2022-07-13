function sortTable(field, sort) {
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
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
    return ` 
    <a href="?_sort&column=${field}&type=${type}" style="float: right;">
    <i class="${icon}"></i>
    </a>
<<<<<<< HEAD
    `
}
module.exports = sortTable
=======
    `;
}
module.exports = sortTable;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
