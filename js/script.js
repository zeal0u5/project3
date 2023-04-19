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

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//this code for the slide show is from w3schools