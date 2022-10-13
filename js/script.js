const btnRules = document.querySelector('.rules');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const score = document.querySelector('.value');

score.textContent = 0;
//Modal window
btnRules.addEventListener('click', function () {
  modal.classList.toggle('hidden');
});
modalClose.addEventListener('click', function () {
  modal.classList.add('hidden');
});
