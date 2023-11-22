// variable to keep trackj of score
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loss: 0,
  ties: 0,
};

// background variation for button elements
const rockElement = document.querySelector('.js-rock');
const paperElement = document.querySelector('.js-paper');
const scissorsElement = document.querySelector('.js-scissors');

// random selection made by the computer
function compChoice() {
  const randNumb = Math.random();
  let compMove = '';

  if (randNumb >= 0 && randNumb < 1 / 3) {
    compMove = 'Rock';
  } else if (randNumb >= 1 / 3 && randNumb < 2 / 3) {
    compMove = 'Paper';
  } else if (randNumb >= 2 / 3 && randNumb < 1) {
    compMove = 'Scissors';
  }

  return compMove;
}

// variables to store computer move, player move, result of game, and winner
let cpuChoice = '';
let playerChoice = '';
let result = '';
let winner = '';

// results if player chose rock
function rockOptions() {
  updateClassList();
  playerChoice = 'Rock';
  cpuChoice = compChoice();
  if (cpuChoice === 'Paper') {
    result = 'You Lose!!!';
    score.loss += 1;
    winner = 'paper';
    rockElement.classList.add('wrong-choice');
  } else if (cpuChoice === 'Scissors') {
    result = 'You Won!!!';
    score.wins += 1;
    winner = 'rock';
    rockElement.classList.add('right-choice');
  } else if (cpuChoice === 'Rock') {
    result = `It's a tie.`;
    score.ties += 1;
    winner = 'rock';
  }
  updateResultMessage();
  updateMoveImage();
  updateScore();

  localStorage.setItem('score', JSON.stringify(score));
}

// results if player chose paper
function paperOptions() {
  updateClassList();
  playerChoice = 'Paper';
  cpuChoice = compChoice();
  if (cpuChoice === 'Paper') {
    result = `It's a tie.`;
    score.ties += 1;
    winner = 'paper';
  } else if (cpuChoice === 'Scissors') {
    result = 'You Lose!!!';
    score.loss += 1;
    winner = 'scissors';
    paperElement.classList.add('wrong-choice');
  } else if (cpuChoice === 'Rock') {
    result = 'You Won!!!';
    score.wins += 1;
    winner = 'paper';
    paperElement.classList.add('right-choice');
  }
  updateResultMessage();
  updateMoveImage();
  updateScore();

  localStorage.setItem('score', JSON.stringify(score));
}

// results if player chose scissors
function scissorsOptions() {
  updateClassList();
  playerChoice = 'Scissors';
  cpuChoice = compChoice();
  if (cpuChoice === 'Paper') {
    result = 'You Won!!!';
    score.wins += 1;
    winner = 'scissors';
    scissorsElement.classList.add('right-choice');
  } else if (cpuChoice === 'Scissors') {
    result = `It's a tie.`;
    score.ties += 1;
    winner = 'scissors';
  } else if (cpuChoice === 'Rock') {
    result = 'You Lose!!!';
    score.loss += 1;
    winner = 'rock';
    scissorsElement.classList.add('wrong-choice');
  }
  updateResultMessage();
  updateMoveImage();
  updateScore();

  localStorage.setItem('score', JSON.stringify(score));
}

// update the live score
function updateScore() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
}

// update game result message
function updateResultMessage() {
  if (playerChoice != '') {
    document.querySelector(
      '.js-result'
    ).innerHTML = `You picked ${playerChoice} and the computer picked ${cpuChoice}. ${result}`;
  } else {
    document.querySelector('.js-result').innerHTML = `Make a selection.`;
  }
}

// display image based on outcome of game
function updateMoveImage() {
  document.querySelector(
    '.js-moves'
  ).innerHTML = `<img src="./img/${winner}.png" alt=${winner} class="winner-img">`;
}

// clear the added class lists
function updateClassList() {
  rockElement.classList.remove('wrong-choice');
  rockElement.classList.remove('right-choice');
  paperElement.classList.remove('wrong-choice');
  paperElement.classList.remove('right-choice');
  scissorsElement.classList.remove('wrong-choice');
  scissorsElement.classList.remove('right-choice');
}
// reset score function
function resetScore() {
  updateClassList();

  score.wins = 0;
  score.loss = 0;
  score.ties = 0;

  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
  document.querySelector('.js-moves').innerHTML = ``;
  playerChoice = '';
  updateResultMessage();
}

// creates the js-result message
if (playerChoice != '') {
  document.querySelector(
    '.js-result'
  ).innerHTML = `You picked ${playerChoice} and the computer picked ${cpuChoice}. <br><br> ${result}`;
} else {
  document.querySelector('.js-result').innerHTML = `Make a selection.`;
}

// creates the js-score message
document.querySelector(
  '.js-score'
).innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
