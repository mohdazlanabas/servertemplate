
// GEO LOCATION
var x = document.getElementById("location");
	function getLocation() {
		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		        x.innerHTML = "Geolocation is not supported by this browser.";
		    }}
	function showPosition(position) {
		    console.log(position);
		    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;}

// DATE & TIME
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

