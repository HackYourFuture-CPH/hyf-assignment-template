const startBtn = document.getElementById("startBtn");
const timeInput = document.getElementById("timeInput");
const message = document.getElementById("message");
const countdownDisplay = document.getElementById("countdown");
const sCountDisplay = document.getElementById("sCount");
const lCountDisplay = document.getElementById("lCount");

let sCount = 0;
let lCount = 0;
let gameActive = false;
let countdownInterval;

// Animate counter
function updateCounter(element, value) {
  element.textContent = value;
  element.classList.add("increment");
  setTimeout(() => element.classList.remove("increment"), 200);
}

// Reset game state
function resetGame() {
  sCount = 0;
  lCount = 0;
  sCountDisplay.textContent = 0;
  lCountDisplay.textContent = 0;
  message.textContent = "";
  countdownDisplay.textContent = "";
  document.body.style.backgroundColor = "#f0f0f0";
}

// Confetti shooting from top
function startConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD700"];

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: 0 },
      colors: colors,
    });
  }, 250);
}

// End game logic
function endGame() {
  gameActive = false;
  clearInterval(countdownInterval);
  countdownDisplay.textContent = "";

  if (sCount === 0 && lCount === 0) {
    message.textContent = "No one pressed a key! 😅";
    message.className = "";
    return;
  }

  if (sCount > lCount) {
    message.textContent = "Time's up! Player S wins! 🎉";
    message.className = "win";
    startConfetti();
  } else if (lCount > sCount) {
    message.textContent = "Time's up! Player L wins! 🎉";
    message.className = "win";
    startConfetti();
  } else {
    message.textContent = "Time's up! It's a tie! 🤝";
    message.className = "tie";
    startConfetti();
  }

  document.body.style.backgroundColor = "#f0f0f0";
}

// Start game button
startBtn.addEventListener("click", () => {
  const time = parseInt(timeInput.value);
  if (!time || time <= 0) {
    alert("Enter a valid time in seconds!");
    return;
  }

  resetGame();
  gameActive = true;
  message.textContent = "Game started! Go!";

  let remaining = time;
  countdownDisplay.textContent = `Time left: ${remaining}s`;

  countdownInterval = setInterval(() => {
    remaining--;
    countdownDisplay.textContent = `Time left: ${remaining}s`;
  }, 1000);

  setTimeout(() => endGame(), time * 1000);
});

// Key press handling
document.addEventListener("keydown", (e) => {
  if (!gameActive) return;
  const key = e.key.toLowerCase();

  if (key === "s") {
    sCount++;
    updateCounter(sCountDisplay, sCount);
    document.body.classList.add("flash-s");
    setTimeout(() => document.body.classList.remove("flash-s"), 150);
  }

  if (key === "l") {
    lCount++;
    updateCounter(lCountDisplay, lCount);
    document.body.classList.add("flash-l");
    setTimeout(() => document.body.classList.remove("flash-l"), 150);
  }
});
