$(document).ready(function () {

    $('#joinRoom').click(function () {
        var userName = $('#userName').val()
        var dateOfBirth = $('#dob').val()

        $.ajax({
            type: "GET",
            url: "/insertUser",
            data: { userName, dateOfBirth },
            success: function (data) {
                window.location.href = 'gameRoom'
            },
            error: function () { },
        });
        console.log(userName)
        console.log(dateOfBirth)
    });


})
