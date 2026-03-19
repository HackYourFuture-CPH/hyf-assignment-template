const gameDuration = document.getElementById("gameDuration");
const startGame = document.getElementById("startGame");
const lCountDisplay = document.getElementById("lCount");
const sCountDisplay = document.getElementById("sCount");

const leftPlayer = document.querySelector(".left");
const rightPlayer = document.querySelector(".right");

let lCount = 0;
let sCount = 0;
let gameActive = false;

function resetGame() {
  lCount = 0;
  sCount = 0;
  lCountDisplay.textContent = 0;
  sCountDisplay.textContent = 0;

  leftPlayer.classList.remove("winner", "loser");
  rightPlayer.classList.remove("winner", "loser");
}

function startTheGame() {
  resetGame();

  const duration = Number(gameDuration.value);

  if (!duration || duration <= 0) return;

  gameActive = true;

  setTimeout(endGame, duration * 1000);
}

function endGame() {
  gameActive = false;

  if (lCount > sCount) {
    rightPlayer.classList.add("winner");
    leftPlayer.classList.add("loser");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.8, y: 0.6 },
    });
  } else if (sCount > lCount) {
    leftPlayer.classList.add("winner");
    rightPlayer.classList.add("loser");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.2, y: 0.6 },
    });
  } else {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.6 },
    });
  }
}

// Key press listener
document.addEventListener("keydown", function (event) {
  if (!gameActive) return;

  if (event.key === "l") {
    lCount++;
    lCountDisplay.textContent = lCount;
  }

  if (event.key === "s") {
    sCount++;
    sCountDisplay.textContent = sCount;
  }
});

// Start button
startGame.addEventListener("click", startTheGame);
