var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var outputWins = document.getElementById("winstext");
var outputLosses = document.getElementById("lossestext");
var outputUserChoice = document.getElementById("userchoicetext");
var outputguessLeft = document.getElementById("guessLefttext");
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guestChoice = [];
var computerGuess = ""
onCharInput();

function onCharInput() {

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("ComputerGuess=", computerGuess);
    outputWins.innerHTML = "wins :" + Wins;
    outputLosses.innerHTML = "losses :" + Losses;

    outputUserChoice.innerHTML = "User guesses so far: " + guestChoice;

}

document.onkeyup = function(event) {
    let userGuess = event.key;
    console.log("userGuess=", userGuess);
    guestChoice.push(userGuess);
    outputUserChoice.innerHTML = "User guesses so far: " + guestChoice.join(",");
    guessesLeft--;
    outputguessLeft.innerHTML = "guesses left :" + guessesLeft;

    if (userGuess === computerGuess) {
        Wins++;

        guessesLeft = 9;
        guestChoice = [];
        onCharInput();
    } else if (guessesLeft === 0) {

        Losses++;
        guessesLeft = 9;
        guestChoice = [];
        onCharInput();

    }

}