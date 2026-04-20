const timeInput = document.getElementById("time-input");
const startButton = document.getElementById("start-btn");
const countdownOutput = document.getElementById("countdown-output");
const scoreS = document.getElementById("score-s");
const scoreL = document.getElementById("score-l");
const result = document.getElementById("result");

const winMessage = document.getElementById("win-message");
const winTitle = document.getElementById("win-title");
const winSubtitle = document.getElementById("win-subtitle");
const playAgainButton = document.getElementById("play-again-btn");

let intervalId = null;
let gameRunning = false;
let countS = 0;
let countL = 0;

startButton.addEventListener("click", function () {
  //stop the previous countdown if any
  clearInterval(intervalId);
    intervalId = null;
  hideWinMessage();
  
  //get value from input
  let timeLeft = Number(timeInput.value);

  //input check
  if (timeLeft <= 0 || !timeLeft) {
    countdownOutput.textContent = "Enter a valid number";
    return;
  }

  countS = 0;
  countL = 0;
  scoreS.textContent = 0;
  scoreL.textContent = 0;
  result.textContent = "";
  gameRunning = true;

  //show the countdown
  countdownOutput.textContent = timeLeft;

  //start the countdown
  intervalId = setInterval(function () {
    timeLeft--;
    countdownOutput.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
       intervalId = null;
        gameRunning = false;
      countdownOutput.textContent = "Time's up!";

         let finalMessage = "";

      if (countS > countL) {
        result.textContent = "S wins 🎉";
        finalMessage = `Player S wins with ${countS} clicks!`;
      } else if (countL > countS) {
        result.textContent = "L wins 🎉";
        finalMessage = `Player L wins with ${countL} clicks!`;
      } else {
        result.textContent = "It's a draw 🤝";
        finalMessage = `It's a draw! Both players got ${countS} clicks.`;
      }
      showWinMessage(finalMessage);
    }
  }, 1000);
});


document.addEventListener("keydown", function (event) {
  if (!gameRunning) {
    return;
  }
  if (event.key === "s" || event.key === "S") {
    countS++;
    scoreS.textContent = countS;
  }
  if (event.key === "l" || event.key === "L") {
    countL++;
    scoreL.textContent = countL;
  }
});


// Show Win Message
function showWinMessage(message) {
  winTitle.textContent = "🎉 Game Over! 🎉";
  winSubtitle.textContent = message;
  winMessage.classList.remove("hidden");

  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });
}


function hideWinMessage() {
  winMessage.classList.add("hidden");
}

function resetGame() {
  clearInterval(intervalId);
  intervalId = null;
  gameRunning = false;

  countS = 0;
  countL = 0;

  scoreS.textContent = "0";
  scoreL.textContent = "0";
  countdownOutput.textContent = "0";
  result.textContent = "";
}

playAgainButton.addEventListener("click", function () {
  hideWinMessage();
  resetGame();
  timeInput.value = "";
});