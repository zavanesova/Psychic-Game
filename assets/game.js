var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;

var directionsText = document.getElementById("directions-text");
var directions = document.getElementById("directions");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guesses = document.getElementById("guesses-left");
var yourGuesses = document.getElementById("your-guesses");


window.onload = function() {
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    if(event.keyCode>= 65 && event.keyCode <= 90) {
        if(userGuess === computerChoice) {
        guessesLeft--;
        wins++;
        }
        else if(guessesLeft !== 0) {
        guessesLeft--;
        losses++;
        }
        else if(guessesLeft === 0) {
            if(wins > 1) {
            alert("Game over!\nYou won " + wins + " times!!!")
            reset();
            }
            else if(wins = 1){
            alert("Game over!\nYou won " + wins + " time!!!")
            reset();
            }
            else{
            alert("Game over! Try again!")
            reset();
            }
        }
        function reset() {
            wins = 0;
            losses = 0;
            guessesLeft = 15;
            userGuess = "";
        }
    }
    else if(event.keyCode < 65 || event.keyCode > 90) {
        userGuess = "";
    }

    computerChoice.textContent = "";
    directions.textContent = "";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guesses.textContent = "Guesses left: " + guessesLeft;
    yourGuesses.textContent = "You guessed: " + userGuess;
}}
