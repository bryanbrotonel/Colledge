$(document).ready(function() {
	$('select').material_select();

	$("#form").validate({
		rules: {
			// simple rule, converted to {required:true}
			name: "required",

			age: {
				required: true,
				number: true
			},

			hometown: "required",

      study:"required",

      class:"required",

      pregnant:"required"

		},
		messages: {
			name: {
				required: "Error: Try checking your birth certificate."
			},

			age: {
				required: "Error: It's okay, you can lie if you want."
			},

			hometown: {
				required: "Error: You must live somewhere."
			},

			study: "Error: We won't tell your future profs, don't worry.",

      class:"Error: required",

      pregnant:"Error: You should really fill this one out."

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
});
