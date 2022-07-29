function sortTable(field, sort) {
<<<<<<< HEAD
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
    return ` 
    <a href="?_sort&column=${field}&type=${type}" style="float: right;">
    <i class="${icon}"></i>
    </a>
<<<<<<< HEAD
    `;
}
module.exports = sortTable;
=======
    `
}
module.exports = sortTable
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
