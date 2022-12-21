var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();
var map; // Declare the map variable in the global scope

function initMap() {
  // Get the user's current location
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11.5,
      center: {lat: lat, lng: lng}
    });
    // Add the markers and event listeners as before



  // Add a marker to the map
var marker1 = new google.maps.Marker({
    position: {lat: 40.79816525932935, lng: -73.96851680216488},
    map: map,
  });

  
  // Add another marker to the map
  var marker2 = new google.maps.Marker({
    position: {lat: 40.79796016191922, lng: -73.96897451565641},
    map: map,
  });

  
  // Add another marker to the map
  var marker3 = new google.maps.Marker({
    position: {lat: 40.79953273485606, lng: -73.96478975581769},
    map: map,
  });

  
  // Add another marker to the map
  var marker4 = new google.maps.Marker({
    position: {lat: 40.79934945635314, lng: -73.96483872148701},
    map: map,
  });

  
  // Add another marker to the map
  var marker5 = new google.maps.Marker({
    position: {lat: 40.83372005109081, lng: -73.94480573992801},
    map: map,
  });

  
  
  

  // Add a click event listener to the first marker
  marker1.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '215 West 101st, New York, NY 10025');
    });
  });

  // Add a click event listener to the second marker
  marker2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '214 West 102nd, New York, NY 10025');
    });
  });

  // Add a click event listener to the second marker
  marker3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '147 W 105th St, New York, NY 10025');
    });
  });

  // Add a click event listener to the second marker
  marker4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '145 W 105th St, New York, NY 10025');
    });
  });

  
  // Add a click event listener to the second marker
  marker5.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '3770 Broadway, New York, NY 10032');
    });
  });

  

  // Set the map for the directions renderer
  directionsRenderer.setMap(map);
}



// Function to get directions to an address
function getDirections(origin, destination) {
  // Use the Directions API to get directions from the origin to the destination
  var request = {
    origin: origin,
    destination: destination,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      // Display the directions on the map
      directionsRenderer.setDirections(result);
    } else {
      // Handle error
    }
  });
}

window.addEventListener('load', initMap);
