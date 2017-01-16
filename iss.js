var url = "http://api.open-notify.org/iss-now.json";

var request = require('request');

request(url, function(err, response) {
  if (err) {
    console.log("Something bad happened", err);
  }
  else {
    var searchResults = JSON.parse(response.body);
    console.log(("The latitude of the ISS is ") + Math.round(100*(searchResults.iss_position.latitude))/100);
    console.log(("The longitude of the ISS is ") + Math.round(100*(searchResults.iss_position.longitude))/100);
}
})