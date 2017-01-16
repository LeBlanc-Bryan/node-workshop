var request = require('request');;

var url2 = "http://api.open-notify.org/iss-now.json";

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

var issData = require("./iss.js");

var prompt = require('prompt');

var url = "https://maps.googleapis.com/maps/api/geocode/json?address="

prompt.start();

prompt.get(["city"], function(err, result) {
    if (err) {
        console.log("There was an error with your request, try again.");
    }
    else {
        url = url + result.city;
    }


    request(url, function(err, response) {
        if (err) {
            console.log("There was an error with your request, try again.");
        }
        else {
            var cityLocation = JSON.parse(response.body);
            lat1 = cityLocation.results[0].geometry.location.lat;
            lon1 = cityLocation.results[0].geometry.location.lng;


            request(url2, function(err, response) {
                if (err) {
                    console.log("Something bad happened", err);
                }
                else {
                    var searchResults = JSON.parse(response.body);
                    lat2 = Math.round(100 * (searchResults.iss_position.latitude) / 100);
                    lon2 = Math.round(100 * (searchResults.iss_position.longitude) / 100);
                }


                    var R = 6371e3; // metres
                    var φ1 = lat1.toRadians();
                    var φ2 = lat2.toRadians();
                    var Δφ = (lat2 - lat1).toRadians();
                    var Δλ = (lon2 - lon1).toRadians();
    
                    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
                    var d = R * c;
                    
                    console.log("The ISS is " + (d)/1000 + " kilometres away from you!");
            })
        }
    })



})
