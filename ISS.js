Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

var prompt = require('prompt');

var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

var goog = 'https://maps.googleapis.com/maps/api/geocode/json?address=';


prompt.get(["city"], function(err, result) {
    if (err) {
        console.log("Go fuck yourself");
    }
    else {
        var troogle = goog+result.city;
        request(troogle, function(err, response) {
        
            if(err) {
                console.log("Go fuck yourself again.");
            }
            else {
                var location = JSON.parse(response.body);
                var lat1 = (+location.results[0].geometry.location.lat);
                var lon1 = (+location.results[0].geometry.location.lng);
                request(url, function(err, response) {
                    if(err) {
                        console.log("Keep fucking yourself");
                    }
                    else {
                        var issData = JSON.parse(response.body);
                        var lat2 = (+issData.iss_position.latitude);
                        var lon2 = (+issData.iss_position.longitude);
                        
                        var R = 6371e3; // metres
                        var φ1 = lat1.toRadians();
                        var φ2 = lat2.toRadians();
                        var Δφ = (lat2-lat1).toRadians();
                        var Δλ = (lon2-lon1).toRadians();
                        
                        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                                Math.cos(φ1) * Math.cos(φ2) *
                                Math.sin(Δλ/2) * Math.sin(Δλ/2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                        
                        var d = R * c;
                        console.log("The distance between " + result.city + " and the ISS is " + d/10000 + " km!");
                    }
                }
                )
            }
        }
        )
    }
}
)