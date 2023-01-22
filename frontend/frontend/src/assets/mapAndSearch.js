let map, infoWindow, service, pstn;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  //locationButton.textContent = "Current Location";
  //locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        pstn = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  document.getElementById("fetchB").addEventListener("click", function() {
    findStuffMap('bar');
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function findStuffMap(queryText) {

  const request = {
    location: pstn,
    radius: '1400',
    type: [queryText]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      alert(results.length);
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setZoom(14);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infoWindow.setPosition(place.geometry.location);
    var content = place.name +  '<br>' + place.vicinity 
    infoWindow.setContent(content || "");
    infoWindow.open(map);
  });
}

window.initMap = initMap;