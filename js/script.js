var map;
const iit = {lat:41.835, lng:-87.627};
const severn = {lat:39.028843, lng:	-76.529090};
const ocean = {lat:38.329228, lng:-75.085384};

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15, center:iit,
	});
	const marker = new google.maps.Marker({
		position: iit, map:map,
	});
}
function ultraZoom() {
	map.setZoom(30);
}

function goToSevern() {
	map.setCenter(severn);
	map.setZoom(15);
}

function goToOcean() {
	map.setCenter(ocean);
	map.setZoom(15);}