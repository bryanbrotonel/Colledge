$(function() {
	//Get cookie function
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	var hometown = getCookie("hometown").replace(" ", "%");


	var choice = $.getJSON('world_universities_and_domains.json', function(data) {
		var list = [];
		for (j = 0; j < data.length; j++) {
			if (getCookie("hometown").toLowerCase() == data[j].alpha_two_code.toLowerCase()) {
				list.push(data[j].name);
			}
		}

		console.log(list);

		var colledge = list[Math.floor((Math.random() * list.length))];
		console.log(colledge);

		//Sets college DOM text
		if (typeof list[0] !== 'undefined') {
			name.innerHTML = "Congratulations, " + getCookie("name") + " you're going to:";
			hometown.innerHTML = colledge;
			document.getElementById("again").style.display = 'none';
		} else {
			name.innerHTML = "Sorry,"
			hometown.innerHTML = "We couldn't find a Colledge for you."
			document.getElementById("description").style.display = 'none';
		}
	});



	//Create DOM references
	var name = document.getElementById("name");
	var hometown = document.getElementById("hometown");

	//Sets name DOM text
	if (getCookie("name") != "") {
		name.innerHTML = "Congratulations, " + getCookie("name") + " you're going to:";
	} else {
		name.innerHTML = "I think we've lost your name.."
	}

});
