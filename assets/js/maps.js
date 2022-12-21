var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();

function initMap() {
  // Create the map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11.5,
    center: {lat: 40.7977815, lng: -73.9711954}
  });

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

  
  // Add another marker to the map
  var marker6 = new google.maps.Marker({
    position: {lat:  40.82631196024513, lng: -73.94738180476277},
    map: map,
  });


  // Add another marker to the map
  var marker7 = new google.maps.Marker({
    position: {lat:  40.78030963353353, lng: -73.94658410053034},
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

  

  
  // Add a click event listener to the second marker
  marker6.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '1734 Amsterdam Ave, New York, NY 10031');
    });
  });

  

  
  // Add a click event listener to the second marker
  marker7.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '1758 1st Ave., New York, NY 10128');
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




function sortMarkersByDistance(zipCode) {
  // Convert the zip code to latitude and longitude coordinates using the Geocoder API
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: zipCode }, function(results, status) {
    if (status === 'OK') {
      var zipLatLng = results[0].geometry.location;

      // Calculate the distance between the zip code and each marker
      markers.forEach(function(marker) {
        var markerLatLng = marker.getPosition();
        marker.distance = getDistance(zipLatLng, markerLatLng);
      });

      // Sort the markers by distance
      markers.sort(function(a, b) {
        return a.distance - b.distance;
      });
    } else {
      // If the Geocoder API returns an error, display an error message
      alert('Error: ' + status);
    }
  });
}

// Haversine formula to calculate the distance between two points on a sphere
function getDistance(latLng1, latLng2) {
  var earthRadius = 6371; // Radius of the Earth in kilometers
  var lat1 = latLng1.lat();
  var lng1 = latLng1.lng();
  var lat2 = latLng2.lat();
  var lng2 = latLng2.lng();
  var dLat = toRadians(lat2 - lat1);
  var dLng = toRadians(lng2 - lng1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = earthRadius * c; // Distance in kilometers
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}




// Get the form element
var form = document.getElementById('zip-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the zip code from the form input
  var zipCode = document.getElementById('zip-input').value;

  // Sort the markers by distance from the zip code
  sortMarkersByDistance(zipCode);
});






window.addEventListener('load', initMap);





