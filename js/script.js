//*Modal elements
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');
const btnRules = document.querySelector('.rules');

//*Game elements
const buttons = document.querySelectorAll('.btn');
let player;
let computer;
let result;
// Score
const score = document.querySelector('.value');
let scoreCounter = 0;
// Buttons to chose by player

buttons.forEach(button =>
  button.addEventListener('click', () => {
    player = button.id;
    computerMov();
    score.textContent = scoreCounter;
    console.log(checkWinner(), computerMov(), button.id);
  })
);

function computerMov() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      computer = 'rock';
      break;
    case 2:
      computer = 'paper';
      break;
    case 3:
      computer = 'scissors';
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return 'Draw';
  } else if (computer == 'rock') {
    return player == 'paper' ? 'You win' : 'You lose';
  } else if (computer == 'paper') {
    return player == 'scissors' ? 'You win' : 'You lose';
  } else if (computer == 'scissors') {
    return player == 'rock' ? 'You win' : 'You lose';
  }
}

//Modal window
btnRules.addEventListener('click', function () {
  modal.classList.toggle('hidden');
});
modalClose.addEventListener('click', function () {
  modal.classList.add('hidden');
});
