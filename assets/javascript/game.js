//initialized variables 
//read input from user


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// identifying html elements that need to be populated by Javascript
var outputWins = document.getElementById("winstext");
var outputLosses = document.getElementById("lossestext");
var outputUserChoice = document.getElementById("userchoicetext");
var outputguessLeft = document.getElementById("guessLefttext");
// declaring all the global variables 
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guestChoice = [];
var computerGuess = ""

reset();
// declaring a function reset to get random computer guess and populating output variables
function reset() {

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesLeft = 9;
    guestChoice = [];
    console.log("ComputerGuess=", computerGuess);

    outputWins.innerHTML = "wins :" + Wins;
    outputLosses.innerHTML = "losses :" + Losses;
    outputguessLeft.innerHTML = "guesses left : 9";
    outputUserChoice.innerHTML = "User guesses so far: " + guestChoice;

}
// using a function onkeyup to record the user input and storing it in userguess also updating the output
document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
    console.log("userGuess=", userGuess);
    guestChoice.push(userGuess);
    outputUserChoice.innerHTML = "User guesses so far: " + guestChoice.join(",");
    guessesLeft--;
    outputguessLeft.innerHTML = "guesses left :" + guessesLeft;
    //if input matches computer guess then wins increases and game resets automatically
    //if input don't match the computer guess and the guesses left are 0 then losses go up and game resets.

    if (userGuess === computerGuess) {
        Wins++;
        reset();
    } else if (guessesLeft === 0) {
        Losses++;
        reset();

    }

}