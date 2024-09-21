'use strict';

console.log(document.querySelector('.message').textContent); // textcontent is the content present in message then what the fuck is message
document.querySelector('.message').textContent = 'You Guess correct Number';
document.querySelector('.number').textContent = 45;
// EXPLANATION :
// we selected check button using queryselector and then we use the addEventListener method on that element(here element means document.queryselector) to attach an event handler and that event handler is the function (argument), and this function gives an value so it is called function expression , then we pass the first argument which we had the name of the event that we're listening for,which is a click and then as the second argumentwe have this fucntion value amd this fucmtion simply contain the code that we want to execute , we define the fucntion and pass it into event handler

let secretNumber = Math.trunc(Math.random() * 20) + 1; // here we are reassinging a value to secretNumber so it cant be const
let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#0000FF';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'High Number !' : 'Low Number !';
      displayMessage(guess > secretNumber ? 'High Number !' : 'Low Number !');
      score--; // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game';
      displayMessage('You Lost The Game');
      document.querySelector('.score').textcontent = 0;
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Low Number !';
  //     score--; // score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game';
  //     document.querySelector('.score').textcontent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
