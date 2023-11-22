// GLOBAL VARIABLE TO STORE RANDOM NUMBER
let number = null;

// GLOBAL VARIABLE TO STORE NUMBER OF ATTEMPTS
let attempts = 3;

// GLOBAL VARIABLE TO STORE GUESS VALUES
let choices = [null];
let i = 0;

// HELPER FUNCTION TO GENERATE A RANDOM NUMBER
function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// TODO #2: Define startGame() and playGame() functions here
function startGame() {
  choices = [null];
  document.getElementById('clues').innerHTML =
    'The number is between -10 and 10 <br>';
  number = genRandom(-10, 10);
  if (number > -8) {
    document.getElementById('clues').innerHTML +=
      "It's not the bottom three numbers<br>";
  }
  if (number < 8) {
    document.getElementById('clues').innerHTML +=
      "It's not the top three numbers<br>";
  }
  if (number < 6 && number > -6) {
    document.getElementById('clues').innerHTML +=
      'Somewhere in the middle <br>';
  }
  if (number > 7 || number < -7) {
    document.getElementById('clues').innerHTML +=
      'Somewhere on the extremes <br>';
  }
  if (number == 0) {
    document.getElementById('clues').innerHTML += 'Smack dab in the middle<br>';
  }
}

function playGame() {
  if (number == null) {
    alert('Click New Game');
    return;
  }

  let guess = prompt('Enter a guess between -10 and 10');
  Number(guess);
  if (isNaN(guess)) {
    alert('Enter a valid number. ');
    return;
  }
  if (guess < -10 || guess > 10) {
    alert('Guess is outside of range. Try again.');
  } else {
    while (attempts > 0) {
      if (guess == number) {
        attempts = 3;
        choices[i] = guess;
        alert(
          'You won the game, the number was ' +
            number +
            '.\nYour choices were: ' +
            choices
        );
        i = 0;
        number = null;
        return;
      } else {
        attempts -= 1;
        if (attempts == 0) {
          choices[i] = guess;
          alert(
            "You're wrong and you've ran out of attempts. The number was " +
              number +
              '.\nYour choices were: ' +
              choices
          );
          attempts = 3;
          number = null;
          i = 0;
          return;
        }
        alert(
          'Your guess was incorrect! Guess again.' +
            '\nAttempts remaining: ' +
            attempts
        );
        if (attempts == 2) {
          if (number % 2 == 0) {
            document.getElementById('clues').innerHTML +=
              'The number is even  <br>';
          } else {
            document.getElementById('clues').innerHTML +=
              'The number is odd <br>';
          }
          choices[i] = guess;
          i += 1;
        }
        if (attempts == 1) {
          if (number < 0) {
            document.getElementById('clues').innerHTML +=
              "It's a negative number <br>";
          }
          if (number > 0) {
            document.getElementById('clues').innerHTML +=
              "It's a positive number <br>";
          }
          choices[i] = guess;
          i += 1;
        }
        return;
      }
    }
  }
}

// WAIT FOR THE PAGE TO LOAD BEFORE ADDING LISTENERS
window.addEventListener('load', function () {
  // TODO #1: Set listeners for buttons here
  document.getElementById('newGame').addEventListener('click', startGame);

  document.getElementById('guessNumber').addEventListener('click', playGame);
});
