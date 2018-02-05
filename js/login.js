$(document).ready(function(){
    $("#btn-login").click(function(){
        if ($("#login-info").valid()) {
            var email = $("#email").val();
            var password = $("#password").val();

            var request = $.ajax({
                type: "POST",
                url: "https://todo-js-be.herokuapp.com/auth/sign_in",
                data: {
                    "email": email,
                    "password": password
                }
            });

            request.done(function(data, textStatus, jqXHR) {
                var uId = jqXHR.getResponseHeader("Uid");
                var accessToken = jqXHR.getResponseHeader("Access-Token");
                var client = jqXHR.getResponseHeader("Client");

                localStorage.setItem('uId', uId);
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('client', client);

                console.log(localStorage);
                window.location.href = "./list-todo.html"; 
                // console.log(data);
            });

            request.fail(function(jqXHR, textStatus, errorThrown) {
                // console.log("error");
                var error = jqXHR.responseJSON.errors[0];
                alert(error);
            });
        }
    });
    
    //direct to index.html
    $("#btn-cancel").click(function() {
        window.location.href = "./login.html";
    });
});