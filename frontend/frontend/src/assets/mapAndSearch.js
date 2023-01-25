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
        infoWindow.setContent("Your location.");
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

function runFindStuffMap() {
  let translator = {//maps selected  tags to search tags
    music: ['night_club'],
    outdoors: ['amusement_park', 'park', 'zoo', 'landmark', 'natural_feature'],
    gaming: ['bowling_alley', 'casino'],
    nature: ['aquarium', 'park', 'zoo', 'natural_feature'],
    art: ['aquarium', 'art_gallery', 'museum', 'natural_feature'],
    sports: ['bowling_alley', 'stadium'],
    nightlife: ['bar', 'bowling_alley', 'night_club', 'casino'],
    food: ['bakery', 'bar', 'cafe', 'restaurant'],
    history: ['library', 'museum'],
    science_technology: ['museum'],
    culture: ['library', 'aquarium', 'art_gallery', 'tourist_attraction', 'university', 'zoo', 'landmark'],
    fashion: ['shoe_store', 'shopping_mall', 'jewelery_store'],
    books: ['library', 'book_store'],
    movies: ['movie_theater'],
    health_wellness: ['spa', 'park', 'beauty_salon', 'hair_care']
  }
  let query = window.location.search.substring(1);//pulls tags from url to be used to sort in above
  let params = new URLSearchParams(location.search);
  

  let radius = params.get('travelDistance');
  console.log(radius);
  let priceRange = params.get('priceRange')
  console.log(priceRange);
  let itineryItems = params.get('itineraryItems');
  console.log(itineryItems);

  let vars = query.split('&');
  let service = new google.maps.places.PlacesService(map);
  for(let x = 0; x < vars.length; x++) {
    let pair = vars[x].split('=');
    if(pair[0] == 'query') {
      let queryArray = pair[1].split('%26');
      let tagArray=[];
      let queryText;
      console.log(queryArray);
      for(let x = 0; x < queryArray.length; x++) {
        // console.log('one: ' + queryArray[x]);
        for(let y = 0; y < translator[queryArray[x]].length; y++) {
          // console.log('two: ' + translator[queryArray[x]][y]);
          tagArray=tagArray.concat(translator[queryArray[x]][y]);
          // console.log(tagArray);
          
        }
      }

      queryText=tagArray[Math.floor(Math.random() * tagArray.length)];//grabs random tag
      // console.log(queryText);
      findStuffMap(queryText, radius, priceRange, service);
    }
  }
}
function findStuffMap(queryText, radius, priceRange, service) {//searches based on tags and diplays on map

  // console.log(queryText);

  const request = {
    location: pstn,
    radius: radius,
    maxprice: priceRange,
    type: queryText
  };

  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      // for (let x = 0; x < results.length; x++) {
        let place =results[Math.floor(Math.random() * results.length)]; //returns a random result generated from single tag
        // console.log(place);
        let name=place.name;

        //call function that builds the itinery div html whatever
        createMarker(place);
        
        console.log(name);
      // }

      map.setZoom(12);
      // var bounds = new google.maps.LatLngBounds();
      // bounds.extend(pstn);
      // bounds.extend(place);
      // map.fitBounds(bounds);
    } else{alert("No locations Found")};
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
    // console.log(place.name);
    infoWindow.setContent(content || "");
    infoWindow.open(map);
  });
}

window.initMap = initMap;