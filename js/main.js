// #6 Create a function to add the map, with one variable for map properties. Update the location to your favorite place on Earth.
function initialize() {
  // set map properties
  var mapProp = {
    center : new google.maps.LatLng(37.788890,-122.398104),
    zoom : 5,
    // #13 Disable the default controls on the map
    disableDefaultUI : true,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // #8 Add the map to the screen using the google.maps.Map method.
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  // #10 Create a marker and set the position to mapProp.center. Add the marker to the map using the Google setMap method
  var marker = new google.maps.Marker({
  	position : mapProp.center

  });
  // add marker to map
  marker.setMap(map);

  // #12 Using the google.maps.event.addListener method, add an event so when you click on the marker it zooms in on the map marker
  google.maps.event.addListener(marker, 'click', function() {
  	map.setZoom(9);
  	map.setCenter(marker.getPosition());
  });
};
// #7 Using the google.maps.event.addDomListener method, select the window and when it loads run the function to add the map
google.maps.event.addDomListener(window, 'load', initialize);
