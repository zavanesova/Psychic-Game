var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;

var directionsText = document.getElementById("directions-text");
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
    }
    computerChoice.textContent = "";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guesses.textContent = "Guesses left: " + guessesLeft;
    yourGuesses.textContent = "You guessed: " + userGuess;
}}
