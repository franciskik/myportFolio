function initMap() {
  // Latitude and Longitude for Kampala, Uganda
  var myLatLng = { lat: 0.3476, lng: 32.5825 };

  var map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 17,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Kampala, Uganda", // Title Location
  });
}
