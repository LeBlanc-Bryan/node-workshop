// Generate a random number between 1 and 100. Using the browser functions prompt and alert, 
// ask the user to guess the number. You should give them 4 tries to guess the number. 
// If they guess wrong, tell them if it's higher or lower. If they guess right, congratulate them.
// Otherwise, give them a message saying what the correct number was, as well as their list of guesses.

// Create a file called number-guessing-game.js.
// In this file, re-write your number guessing game 
// (from the basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use 
// capabilities from NodeJS and any external module. 
// HINT: there is an npm library called prompt that can help you with that :)
// Save/commit/push
var prompt = require('prompt');
var JSAlert = require("js-alert");
var target = random();
var numArray = [];
var n = 0;

function random(min, max) {
  return Math.floor((Math.random() * 100) + 1)
}

prompt.start();

function game(n, num) {
  prompt.get(['num'], function(err, result) {
    var guess = Number(result['num']);
      if (err) {
        JSAlert.alert("There was a problem with your input.");
        game();
      }
      else {
        
        if (guess === target) {
          JSAlert.alert("Congratulations the number was " + target + "!");
          return;
        }
      
        else if (100 < guess || guess < 1 || isNaN(guess)) {
        JSAlert.alert("Please enter a valid number between 1-100, try again.");
        game(n);
        }
        
        else if (n === 1) {
          numArray.push(guess);
          JSAlert.alert("Game over! The number was " + target + " and you guessed " + numArray);
        }
        
        else {
          
          if (guess > target) {
            JSAlert.alert("The number is lower, try again");
          }
          
          else if (guess < target) {
            JSAlert.alert("The number is higher, try again");
          }
          
          n = n - 1;
          
          numArray.push(guess);
          
          game(n);
        }
      }
    })
}
game(4);
