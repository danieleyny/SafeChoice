var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();


function initMap() {
  // Create the map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11.5,
    center: {lat: 40.7977815, lng: -73.9711954}
  });

  


  


  
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
      getDirections(new google.maps.LatLng(lat, lng), '214 West 102st, New York, NY 10025');
    });
  });

  // Add a click event listener to the second marker
  marker2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '215 West 101st, New York, NY 10025');
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


window.addEventListener('load', initMap);



































function initMapTest() {
  // Create the map
  var map = new google.maps.Map(document.getElementById('mapTest'), {
    zoom: 11,
    center: {lat: 40.7977815, lng: -73.9711954}
  });



        // Add a marker to the map
        var markerColumbia = new google.maps.Marker({
          position: {lat: 40.80409446608371, lng: -73.96858177791212},
          map: map,
          icon: new google.maps.MarkerImage(
            'assets/img/columbiapin4.png',
            null, // size
            new google.maps.Point(0, 0), // origin
            null, // anchor
            new google.maps.Size(30, 40) // scaledSize
          ),
          flat: true // make the marker stay at its position on the map
        });
        



  // Add a marker to the map
  var markerColumbia2 = new google.maps.Marker({
    position: {lat: 40.80382310972846, lng: -73.96589774655698},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/columbiapin4.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
 
  

  // Add a marker to the map
  var markerColumbia4 = new google.maps.Marker({
    position: {lat: 40.80673127558823, lng: -73.964032573546},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/columbiapin4.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  
  
  // Add a marker to the map
  var markerColumbia5 = new google.maps.Marker({
    position: {lat: 40.80565847308409, lng: -73.96344367354602},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/columbiapin4.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  

  // Add a marker to the map
  var markerColumbia3 = new google.maps.Marker({
    position: {lat: 40.80827675472973, lng: -73.96544474471074},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/columbiapin4.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  

  // Add a marker to the map
  var markerHunter = new google.maps.Marker({
    position: {lat:  40.78366509381712, lng: -73.95230550046314},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/huntermarkerlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  

   
  // Add a marker to the map
  var markerHunter2 = new google.maps.Marker({
    position: {lat:  40.78639168641162, lng: -73.94898903121697},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/huntermarkerlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  

  // Add a marker to the map
  var markerHunter3 = new google.maps.Marker({
    position: {lat:  40.78603895989781, lng: -73.9541184177224},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/huntermarkerlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  

  // Add a marker to the map
  var markerHunter4 = new google.maps.Marker({
    position: {lat:  40.80025977729348, lng: -73.93949982937049},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/huntermarkerlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   

  // Add a marker to the map
  var markerHunter5 = new google.maps.Marker({
    position: {lat:  40.7727356298382, lng: -73.95360127170105},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/huntermarkerlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  

  // Add a marker to the map
  var markerBaruch = new google.maps.Marker({
    position: {lat:  40.7000583303524, lng: -73.9954841158792},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/baruchpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   

  // Add a marker to the map
  var markerBaruch2 = new google.maps.Marker({
    position: {lat:  40.6988927260581, lng: -73.99583972937378},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/baruchpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   

  // Add a marker to the map
  var markerBaruch3 = new google.maps.Marker({
    position: {lat:  40.77270312978741, lng: -73.95368710238226},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/baruchpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  
  

  // Add a marker to the map
  var markerBaruch4 = new google.maps.Marker({
    position: {lat:  40.75711152561686, lng: -73.97189678888827},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/baruchpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  

  // Add a marker to the map
  var markerFordham = new google.maps.Marker({
    position: {lat:  40.86426710887062, lng: -73.88688710423395},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/fordhampinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
 
  
   
  
  // Add a marker to the map
  var markerFordham2 = new google.maps.Marker({
    position: {lat:  40.8617159526293, lng: -73.88953451409051},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/fordhampinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   
  
  // Add a marker to the map
  var markerFordham3 = new google.maps.Marker({
    position: {lat:  40.77170576009421, lng: -73.98478695806324},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/fordhampinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });

  
  // Add a marker to the map
  var markerManhattan = new google.maps.Marker({
    position: {lat:  40.890742795406275, lng: -73.90154211260933},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/manhattanpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  
  // Add a marker to the map
  var markerManhattan2 = new google.maps.Marker({
    position: {lat:  40.890804385931354, lng: -73.89896315474833},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/manhattanpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
   
  
  // Add a marker to the map
  var markerManhattan3 = new google.maps.Marker({
    position: {lat:  40.82410573518232, lng: -73.91421578703999},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/manhattanpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   
  
  // Add a marker to the map
  var markerManhattan4 = new google.maps.Marker({
    position: {lat:  40.88768687239375, lng: -73.90435916004881},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/manhattanpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
   

  // Add a marker to the map
  var markerPratt = new google.maps.Marker({
    position: {lat:  40.69054112785549, lng: -73.96358627354985},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/prattlogopin.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   
  // Add a marker to the map
  var markerPratt2 = new google.maps.Marker({
    position: {lat:  40.69190684226504, lng: -73.9615736023849},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/prattlogopin.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
   
   
  // Add a marker to the map
  var markerPratt3 = new google.maps.Marker({
    position: {lat:  40.69360947301373, lng: -73.96201633491219},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/prattlogopin.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  
   
  // Add a marker to the map
  var markerPratt4 = new google.maps.Marker({
    position: {lat:  40.692871740026646, lng: -73.96337501587949},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/prattlogopin.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
  
 
   
  // Add a marker to the map
  var markerPratt5 = new google.maps.Marker({
    position: {lat:  40.694669991191546, lng: -73.96442252243597},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/prattlogopin.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
   
   
  // Add a marker to the map
  var markerSVA = new google.maps.Marker({
    position: {lat:  40.7192736947285, lng: -73.98892600053796},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/svapinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
   
   
  // Add a marker to the map
  var markerSVA2 = new google.maps.Marker({
    position: {lat:  40.737991179642414, lng: -73.98647497539434},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/svapinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  
 
   
  // Add a marker to the map
  var markerSVA3 = new google.maps.Marker({
    position: {lat:  40.73781479431826, lng: -73.97888484655918},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/svapinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });
  
  

  
  // Add another marker to the map
  var marker2 = new google.maps.Marker({
    position: {lat: 40.79796016191922, lng: -73.96897451565641},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });


  
  // Add another marker to the map
  var marker3 = new google.maps.Marker({
    position: {lat: 40.79953273485606, lng: -73.96478975581769},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });


  
  // Add another marker to the map
  var marker4 = new google.maps.Marker({
    position: {lat: 40.79934945635314, lng: -73.96483872148701},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });

  
  // Add another marker to the map
  var marker5 = new google.maps.Marker({
    position: {lat: 40.83372005109081, lng: -73.94480573992801},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });

  
  // Add another marker to the map
  var marker6 = new google.maps.Marker({
    position: {lat:  40.82631196024513, lng: -73.94738180476277},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });


  // Add another marker to the map
  var marker7 = new google.maps.Marker({
    position: {lat:  40.78030963353353, lng: -73.94658410053034},
    map: map,
    icon: new google.maps.MarkerImage(
      'assets/img/residentialpinlogo.png',
      null, // size
      new google.maps.Point(0, 0), // origin
      null, // anchor
      new google.maps.Size(30, 40) // scaledSize
    ),
    flat: true // make the marker stay at its position on the map
  });

  
  
  

  // Add a click event listener to the first marker
  markerColumbia.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '362 Riverside Drive, New York, NY 10027');
    });
  });

  
  // Add a click event listener to the first marker
  markerColumbia2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '544 W. 110th Street, New York, NY 10027');
    });
  });
  
  // Add a click event listener to the first marker
  markerColumbia3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '627 West 115th Street, New York, NY 10027');
    });
  });
  
  // Add a click event listener to the first marker
  markerColumbia4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '545 West 114th Street, New York, NY 10027');
    });
  });
  
  // Add a click event listener to the first marker
  markerColumbia5.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '523 W 113th St., New York, NY 10027');
    });
  });


  
  // Add a click event listener to the first marker
  markerHunter.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '1395 Lexington Avenue, New York, NY 10128');
    });
  });


  
  // Add a click event listener to the first marker
  markerHunter2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '1760 3rd Avenue, New York, NY 10029');
    });
  });


  
  // Add a click event listener to the first marker
  markerHunter3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '71 East 94th Street, New York, NY 10128');
    });
  });



  
  // Add a click event listener to the first marker
  markerHunter4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '2180 3rd Avenue, New York, York 10035');
    });
  });




  
  // Add a click event listener to the first marker
  markerHunter5.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '334 East 79th Street, New York, NY 10075');
    });
  });



  
  // Add a click event listener to the first marker
  markerBaruch.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '97 Columbia Heights, Brooklyn, NY 11201');
    });
  });

  
  // Add a click event listener to the first marker
  markerBaruch2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '119 Columbia Heights, Brooklyn, NY 11201');
    });
  });

  
  // Add a click event listener to the first marker
  markerBaruch3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '334 E 79th St, New York, NY 10075');
    });
  });


  
  // Add a click event listener to the first marker
  markerBaruch4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '569 Lexington Ave, New York, NY 10022');
    });
  });

  
  // Add a click event listener to the first marker
  markerFordham.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), 'Loschert Hall, The Bronx, NY 10458');
    });
  });


  
  // Add a click event listener to the first marker
  markerFordham2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '441 E Fordham Rd, The Bronx, NY 10458');
    });
  });


  
  // Add a click event listener to the first marker
  markerFordham3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), 'Mckeon Hall, 150 W 62nd St, New York, NY 10023');
    });
  });



  
  // Add a click event listener to the first marker
  markerManhattan.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '4513 Manhattan College Pkwy, The Bronx, NY 10471');
    });
  });


  
  // Add a click event listener to the first marker
  markerManhattan2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), 'Horan Hall, 4513 Manhattan College Pkwy, The Bronx, NY 10471');
    });
  });
  



  // Add a click event listener to the first marker
  markerManhattan3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '863 Melrose Ave, The Bronx, NY 10451');
    });
  });
  



  // Add a click event listener to the first marker
  markerManhattan4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '435 W 238th St, The Bronx, NY 10463');
    });
  });
  



  // Add a click event listener to the first marker
  markerPratt.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '224 Grand Ave, Brooklyn, NY 11205');
    });
  });



  // Add a click event listener to the first marker
  markerPratt2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), 'Classon Ave, Brooklyn, NY 11238');
    });
  });


  // Add a click event listener to the first marker
  markerPratt3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '135 Emerson Pl, Brooklyn, NY 11205');
    });
  });



  // Add a click event listener to the first marker
  markerPratt4.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), 'Pratt Institute, Brooklyn, NY 11205');
    });
  });



  // Add a click event listener to the first marker
  markerPratt5.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '100 Grand Ave, Brooklyn, NY 11205');
    });
  });


  // Add a click event listener to the first marker
  markerSVA.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '101 Ludlow St, New York, NY 10002');
    });
  });



  // Add a click event listener to the first marker
  markerSVA2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '17 Gramercy Pk S, New York, NY 10003');
    });
  });



  // Add a click event listener to the first marker
  markerSVA3.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the first address
      getDirections(new google.maps.LatLng(lat, lng), '340 East 24th Street, New York, NY 10010');
    });
  });



  // Add a click event listener to the second marker
  marker2.addListener('click', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      // Get directions from the user's current location to the second address
      getDirections(new google.maps.LatLng(lat, lng), '215 West 101st, New York, NY 10025');
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


window.addEventListener('load', initMapTest);





