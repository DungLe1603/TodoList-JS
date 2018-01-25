function register() {
  var xhttp = new XMLHttpRequest(); 
  var url = "https://todo-js-be.herokuapp.com/auth";
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log("email = "+email+", pass = "+password);
  var url = url + "?email=" + email + "&password=" + password;  

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

  function getSuccessOutput(){
	$.ajax({
		type: "post",
		url: 'https://todo-js-be.herokuapp.com/auth/sign_in',
		data: {
            "email": email,
            "password": password
        },
		complete: function(respone) {
			$('#output').html(respone.responseText);
		},
		error: function() {
			$('#output').html('Bummer: There was an error!');
		},
	});
}
// function cancel(event) {
//     document.location.href = "./index.html";
// }