$('.delete').on('click', function(e) {
    e.preventDefault();
    let url = $(this).data('url')
    let that = $(this)
    console.log(url)
    Swal.fire({
        title: 'Bạn có chắc chắn xóa?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý'
    }).then((results => {
        if (results.isConfirmed) {
            $.ajax({
                type: "delete",
                url: url,
                success: function(response) {
                    if (response.success) {
                        that.parent().parent().remove()
                        Swal.fire(
                            'Đã xóa!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                }
            });
        }
    }))
});