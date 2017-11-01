$(function() {
		document.getElementById('submit').on('click', e => {
      var hometown = document.getElementById('hometown').value;
      if (hometown != null) {
        document.cookie = "hometown=" + hometown;
      }
      else {
        document.cookie = "hometown=null";
      }
		});
	)
};
