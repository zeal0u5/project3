let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.074300, lng: -76.575743},
    zoom: 8
  });
}
initMap();