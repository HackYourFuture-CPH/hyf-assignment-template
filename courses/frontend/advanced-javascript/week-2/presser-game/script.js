const inputField = document.querySelector(".seconds-input");
const gameForm = document.querySelector("form");

const scoreS = document.querySelector(".player-s-score");
const scoreL = document.querySelector(".player-l-score");
const startButton = document.querySelector(".start-button");

let isGameRunning = false;
let countS = 0;
let countL = 0;

gameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const gameTime = parseInt(inputField.value);

  startGame(gameTime);
});

window.addEventListener("keydown", (event) => {
  if (!isGameRunning) return;

  const key = event.key.toLowerCase();

  if (key === "s") {
    countS++;
    scoreS.innerText = countS;
  } else if (key === "l") {
    countL++;
    scoreL.innerText = countL;
  }
});

function startGame(time) {
  countS = 0;
  countL = 0;
  scoreS.innerText = "";
  scoreL.innerText = "";

  isGameRunning = true;
  startButton.disabled = true;

  setTimeout(() => {
    isGameRunning = false;
    startButton.disabled = false;
    findWinner();
  }, time * 1000);
}

function findWinner() {
  if (countS > countL) {
    scoreS.innerText = " Player Wins!!!";
  } else if (countL > countS) {
    scoreL.innerText = " Player Wins!!!";
  } else {
    scoreS.innerText = "Try again";
    scoreL.innerText = "Try again";
  }
}
