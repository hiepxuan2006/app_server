const checkboxAll = $('#form-check-all')
const checkItem = $('.form-check-input')
checkboxAll.change(function(e) {
    // e.preventDefault();
    let ischeckAll = $(this).prop('checked')
    checkItem.prop('checked', ischeckAll)
});
checkItem.change(function(e) {
    let ischeckAll = checkItem.length === $('input[name="checkInput[]"]:checked').length
    checkboxAll.prop('checked', ischeckAll)
    console.log(checkItem.length, '--------------')
    console.log($('input[name="checkInput[]"]:checked'))
    console.log(ischeckAll)
});