$(function() {

	//Fom error handling
	$("#form").validate({
		rules: {
			name: "required",

			age: "required",

			country: "required",

			study: "required",

			class: "required",

			pregnant: "required"

		},
		messages: {
			name: "Error: Required field - Try checking your birth certificate.",

			age: "Error: Required field - It's okay, you can lie if you want.",

			country: "Error: Required field - You're not homeless, are you?",

			study: "Error: Required field - We won't tell your future professors, don't worry.",

			class: "Error: Required field - We won't tell your parents, don't worry.",

			pregnant: "Error: Required field - You really shouldn't skip this one."

		},
		errorElement: 'div',
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	});

	//Set cookie function
	function setCookie(cname, cvalue, exmins) {
		var d = new Date();
		d.setTime(d.getTime() + (exmins * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	//Setting cookies on submit
	document.getElementById('submit').addEventListener('click', function() {
		var countryData = $("#country").countrySelect("getSelectedCountryData").iso2;
		var name = document.getElementById('name').value;
		if (countryData != "" && name != "") {
			setCookie("name", name, 5)
			setCookie("hometown", countryData, 5)
		}
	});
});
