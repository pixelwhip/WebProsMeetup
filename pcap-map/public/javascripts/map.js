// map.js

// cloudmade key for account sirkitree@gmail.com
var apiKey = "ad76b55c34a64707a116a120163bee5f";
var map = new L.Map('map');

var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/' + apiKey +'/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});

// geographical point (longitude and latitude)
var london = new L.LatLng(51.505, -0.09);
map.setView(london, 13).addLayer(cloudmade);

// socket.io receiver
var socket = io.connect('http://localhost');

socket.on('newPoint', function (data) {
  console.log(data);

  // create a point
  var circleLocation = new L.LatLng(data.lat, data.lng),
    circleOptions = {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5
    };

  var circle = new L.Circle(circleLocation, 100, circleOptions);
  map.addLayer(circle);
});