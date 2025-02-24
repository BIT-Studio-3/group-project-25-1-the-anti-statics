let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 34.04924594193164, lng: -118.24104309082031 },
    });
    const trafficLayer = new google.maps.TrafficLayer();
  
    trafficLayer.setMap(map);
  }
  
  window.initMap = initMap;