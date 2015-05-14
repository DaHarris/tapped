$(document).ready(function() {
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 14,
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);


        map.setCenter(pos);

        function centerBrewery(lat, long) {
          $('#map-canvas').css('width','30%');
          google.maps.event.trigger(map, "resize");
          position = new google.maps.LatLng(lat, long);
          map.setCenter(position);
          map.setZoom(15);
        }

        $('body').on('click', '.fi-x', function(){
          $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
          $('#map-canvas').css('width','100%');
          google.maps.event.trigger(map, "resize");
        });


        var breweries;
        var visited_breweries;
        var not_visited;

        function visited() {
          $.ajax({
            url: "/tours/visited",
            type: "get"
          }).success(function(data) {
            visited_breweries = data.visited;
            not_visited = data.not_visited;
            getBreweries(position.coords.latitude,position.coords.longitude);
          });
        }

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

        setMarker();
        visited();

        function setMarker(lat, long, title) {
          if (lat === undefined && long === undefined) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            title = "Your Location";
          }
          pos = new google.maps.LatLng(lat,long);

          if (title == "Your Location") {
            iconBase = 'http://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png';
          } else {
            var check = false;
            for (var i=0;i<visited_breweries.length;i++) {
              if (visited_breweries[i].brewery_name == title) {
                check = true;
                break;
              }
            }
            if (check == false) {

              var iconBase = 'http://icons.iconarchive.com/icons/icons8/ios7/32/Food-Beer-icon.png';
            } else {
              var iconBase = 'http://icons.iconarchive.com/icons/icons8/windows-8/32/Food-Beer-icon.png';
            }
          }

          var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: title,
              icon: iconBase
          });

          if (title != "Your Location") {
            google.maps.event.addListener(marker, 'click', function(){menuPull(marker.title);});
            google.maps.event.addListener(marker, 'click', function(){centerBrewery(lat, long);});
          }
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
