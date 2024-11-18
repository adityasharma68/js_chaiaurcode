let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaing = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess); //to cheak number is print or not.
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //it help to cheak the number is valid or not.
  if (isNaN(guess)) {
    alert("Please enter a Valid Number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 9) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      cheakGuess(guess);
    }
  }
}

function cheakGuess(guess) {
  //it help to cheak number is higer or lower
  if (guess === randomNumber) {
    displayMessage(`You guesses it right`);
    endGame();
  } else if (guess < 35) {
    displayMessage(`Number is Tooo Low`);
  } else if (guess > 35 && guess < 65) {
    displayMessage(` `);
  } else if (guess > 65) {
    displayMessage(`Number is Tooo High`);
  }
}

function displayGuess(guess) {
  // it help to show user value and also update the value.
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaing.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // it help to display the lower and higher value
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  //it help to end the game.
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<button id ="newGameButton">Start new Game</button>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newButton = document.querySelector("#newGameButton");
  newButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaing.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
