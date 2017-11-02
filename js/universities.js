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

	var name = getCookie("name");

	var choice = $.getJSON('world_universities_and_domains.json', function(data) {
		var list = [];
		for (j = 0; j < data.length; j++) {
			if (getCookie("hometown").toLowerCase() == data[j].alpha_two_code.toLowerCase()) {
				list.push(data[j].name);
			}
		}

		//Sets college DOM text
		if (typeof list[0] !== 'undefined') {
			name.innerHTML = "Congratulations, " + name + " you're going to:";
			hometown.innerHTML = list[Math.floor((Math.random() * list.length))];
			document.getElementById("again").style.display = 'none';
		} else {
			name.innerHTML = "Sorry,"
			hometown.innerHTML = "We couldn't find a Colledge for you."
			document.getElementById("description").style.display = 'none';
		}
	});



	//Create DOM references
	var nameDOM = document.getElementById("name");
	var hometown = document.getElementById("hometown");

	//Sets name DOM text
	if (getCookie("name") != "") {
		nameDOM.innerHTML = "Congratulations, " + name + " you're going to:";
	} else {
		nameDOM.innerHTML = "I think we've lost your name.."
	}

});
