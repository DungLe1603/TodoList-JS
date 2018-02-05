$(document).ready(function(){
    $("#btn-register").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();
      
      var request = $.ajax({
          type: "POST",
          url: "https://todo-js-be.herokuapp.com/auth/",
          data: {
              "email": email,
              "password": password
          }
      });

      request.done(function(data, textStatus, jqXHR) {
        alert("You had a success register! ");
        window.location.href = "./list-todo.html"; 
        console.log(data);
      });

      request.fail(function(jqXHR, textStatus, errorThrown) {
          console.log("error");
          alert("There was something wrong!");
      });
    });
    
    $("#btn-cancel").click(function() {
        window.location.href = "./register.html";
    });
});
