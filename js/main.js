$(document).ready(function() {

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAzzTPmuK7-KKQ3DoN0m3uBuhGokaUBzZA",
		authDomain: "colledge-f0bab.firebaseapp.com",
		databaseURL: "https://colledge-f0bab.firebaseio.com",
		projectId: "colledge-f0bab",
		storageBucket: "colledge-f0bab.appspot.com",
		messagingSenderId: "26297603867"
	};
	firebase.initializeApp(config);

	//<Material Select
	$('select').material_select();

	// Global site tag (gtag.js) - Google Analytics
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'UA-108344152-2');
});
