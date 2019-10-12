# Psychic-Game

## Summary


This is a simple game in which user has to guess what letter is computer thinking of. Everytime you type a letter, that letter is displayed on the screen in the array user guesses so far. If your guess matches the computer's guess, you win and the game resets automatically. 
But if your guess don't match with what computer has picked, the game gives you 9 chances before it resets itself automatically increasing yor losses.

Pseudocode put throughout to understand the functionality of code.

## Tech Used
* HTML
* Javascript
* Css 
* Bootstrap

## javascript code snippet
```javascript
  document.onkeyup = function(event) {
       let userGuess = event.key.toLowerCase();
        console.log("userGuess=", userGuess);
         guestChoice.push(userGuess);
          outputUserChoice.innerHTML = "User guesses so far: " + guestChoice.join(",");
       guessesLeft--;
    outputguessLeft.innerHTML = "guesses left :" + guessesLeft;
 if (userGuess === computerGuess) {
        Wins++;
        reset();
      } else if (guessesLeft === 0) {
        Losses++;
        reset();
       }
}
```


## Adding Game Preview

![image](https://user-images.githubusercontent.com/54960706/66702831-bb31f480-ecc0-11e9-9828-9bfd87fb5a3a.png)
