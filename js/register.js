function register() {
  var xhttp = new XMLHttpRequest(); 
  var url = "https://todo-js-be.herokuapp.com/auth";
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log("email = "+email+", pass = "+password);
  var url = url + "?email=" + email + "&password=" + password;  

  xhttp.open("POST", url, true);
  // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
	xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == XMLHttpRequest.DONE) {
	        alert(JSON.parse(xhttp.responseText).errors.full_messages);

	    }
	    else    { 
	    	alert(JSON.parse(xhttp.responseText).status);
	    }

	}
}