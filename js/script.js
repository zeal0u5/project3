// Slider code from https://bxslider.com/
$(document).ready(function(){
	$('.slider').bxSlider();
		
});

var map;
const iit = {lat:41.835, lng:-87.627};
const polska = {lat:52, lng:21};
const goodwill = {lat:41.88284462952575, lng:-87.65705415769303};

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

function goToPoland() {
	map.setCenter(polska);
	map.setZoom(6);
}

function goToGoodwill() {
	map.setCenter(goodwill);
	map.setZoom(20);
}