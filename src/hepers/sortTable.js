function sortTable(field, sort) {
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
    return ` 
    <a href="?_sort&column=${field}&type=${type}" style="float: right;">
    <i class="${icon}"></i>
    </a>
    `
}
module.exports = sortTable