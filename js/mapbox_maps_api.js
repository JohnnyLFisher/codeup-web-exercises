// Page dropdown and buttons
var zoomSelect = document.getElementById("zoom-select")
zoomSelect.addEventListener("change", function (event) {
	var zoomValue = zoomSelect.options[zoomSelect.selectedIndex].value;
	map.setZoom(parseInt(zoomValue));
})

var styleSelect = document.getElementById("style-select")
styleSelect.addEventListener("change", function (event) {
	var styleValue = styleSelect.options[styleSelect.selectedIndex].value;
	var styleString = "mapbox://styles/mapbox/" + styleValue;
	map.setStyle(styleString);
})

var resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", function (event) {
	map.setZoom(10);
	map.setCenter([-98.4916, 29.4252]);
	map.setStyle('mapbox://styles/mapbox/streets-v9');
	marker.setLngLat([-98.4916, 29.4252]);
	popup.setText("Codeup");

});


/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/

mapboxgl.accessToken = mapboxToken; // from key.js file
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
	center: [-98.4916, 29.4252],
	zoom: 9
});


/**********************************************
 * 					MARKERS
 *********************************************/


/**********************************************
 * 					POPUPS
 *********************************************/


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

let searchString;

// Add an event listener for the search-button 'button'
document.getElementById("search-button").addEventListener("click", function(){

	searchString = prompt("Enter a location")

	var searchMarker = new mapboxgl.Marker({
		color: 'red'
	})
		.setLngLat([-98.4916, 29.4252])
		.addTo(map);

	var searchPopup = new mapboxgl.Popup()
		.setMaxWidth('100px')
		.addTo(map);

	geocode(searchString, mapboxToken).then(function (result) {
		console.log(result);
		map.flyTo({
			center: result,
			zoom: 7,
			speed: 0.9,
			curve:1
		});
		searchMarker.setLngLat(result)
		reverseGeocode(result,mapboxToken).then(function (placeName) {
			console.log("after reverse geocode, the place name is: " + placeName);
			searchPopup.setText(placeName)
			searchMarker.setPopup(searchPopup)
		})
	})





})