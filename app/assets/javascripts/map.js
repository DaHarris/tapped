$(document).ready(function() {
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);


        map.setCenter(pos);

        var breweries;

        function getBreweries(lat, long) {
          var latitude = lat;
          var longitude = long;
          var key = "2d7027bd882e632ce62104e5909937c3";
          var begin = "http://api.brewerydb.com/v2/search/geo/point?";
          var fullUrl = begin + "lat=" + latitude + "&lng=" + longitude + "&key=" + key + "&format=json";

          $.jsonp({
           url: fullUrl,

           success: function(data){
             var breweries = data["data"];
             var counter = data["data"].length;
             var params = {brewery: {breweries}}
             $.ajax({
               url: "/breweries",
               type: "post",
               data: params
             })
             for (var i=0;i<counter;i++) {
               lat = data["data"][i].latitude;
               lng = data["data"][i].longitude;
               name = data["data"][i].brewery.name;
               setMarker(lat, lng, name);
             }
           }
          });
        };

        getBreweries(position.coords.latitude,position.coords.longitude);

        setMarker();

        function setMarker(lat, long, title) {
          if (lat === undefined && long === undefined) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            title = "Your Location";
          }
          pos = new google.maps.LatLng(lat,long);
          var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: title
          });
        }
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    map.setCenter(options.position);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
