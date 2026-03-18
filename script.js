// script.js
$(document).ready(function() {
    $("#loginBtn").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();

        if(username === "" || password === "") {
            // Panggil popup
            $("#popupError").popup("open");
        } else {
            // Redirect ke page2
            $.mobile.changePage("#page2");
        }
    });
});