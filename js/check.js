$(document).ready( function () {
	$("#register-info").validate( {
		rules: {
			"username": {
				required: true,
				minlength: 4,
				maxlength: 40
			},
			"firstname": {
				required: true
			},
			"lastname": {
				required: true
			},
			"email": {
				required: true
			},
			"password": {
				required: true,				
				minlength: 6,
				maxlength: 40
			},
			"repassword": {
				required: true,
				equalTo: "#password",
			},
		
		},
		messages: {
			"username": {
				required: "Must not be empty!",
				minlength: "Minimum 4 characters!",
				maxlength: "Maximum 4 characters!"
			},
			"firstname": {
				required: "Must not be empty!"
			},
			"lastname": {
				required: "Must not be empty!"
			},
			"email": {
				required: "Must not be empty!"
			},
			"password": {
				required: "Must not be empty!",					
				minlength: "Minimum 4 characters!",
				maxlength: "Maximum 4 characters!"
			},	
			"repassword": {
				required: "Must not be empty!",	
				equalTo: "Passwords must match the entered password!", 	
			},
			
		}
	});

});