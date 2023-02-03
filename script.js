'use strict';

var score = 20;
var highScore = 0;
let randomNum = Math.trunc(Math.random() * 20);

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  document.querySelector('.number').value = randomNum;

  // when player is correct
  if (input === randomNum) {
    message('🎉 Congrats');
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = 'lime';
    document.querySelector('.number').style.width = '30rem';
  }
  // when player is incorrect
  else if (input != randomNum) {
    if (score > 1) {
      if (input > randomNum) {
        message('📈 Too high');
      } else {
        message('📉 Too low');
      }
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      message('💥 Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when there is no input
  else if (!input) {
    message('⛔️ Invalid input');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20);
  message('Start guessing');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
