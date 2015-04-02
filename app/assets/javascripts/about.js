$(document).ready(function () {

  function buildMap(loc) {
    var mapCanvas = document.getElementById(loc.containerId);
    var lat = loc.lat;
    var lng = loc.lng;

    var center = new google.maps.LatLng(lat, lng);

    var mapOptions = {
      center: center,
      zoom: 6,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      title: 'Home',
      animation: google.maps.Animation.DROP,
      map: map
    });

    marker.setMap(map);
    google.maps.event.addDomListener(window, 'resize', function () {
      map.setCenter(center);
    });
  }

  var home = {lat: 39.732307, lng: -104.933929, containerId: 'home-container'};
  var alabama = {lat: 30.520588, lng: -88.342278, containerId: 'alabama-container'};

  $('.about .header-click').on('click', function () {
    buildMap(home);
    buildMap(alabama);
  })

});
