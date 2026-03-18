//The fastest presser in this realm


  let sCount = 0;
  let lCount = 0;
  let gameActive = false;   // prevents early key presses


const button = document.getElementById("btn");
const output = document.getElementById("output");
const sBox = document.getElementById("sBox");
const lBox = document.getElementById("lBox");
const restartBtn = document.getElementById("restartBtn");


 
button.addEventListener("click", function () {
    const input = document.getElementById("timeInput");
    const gameTime = Number(input.value);

    if(!gameTime || gameTime <= 0) {
        console.log("Please enter a valid value before starting the game")
       return;
    } 

    sCount = 0;
    lCount = 0;
    output.textContent = "Game started! Press S or L!";
    gameActive = true;

     setTimeout(function () {
        endGame();
    }, gameTime * 1000);

});

  

function handleKeyPress (event) {
    if(!gameActive) return;
     const key = event.key.toLowerCase();

     if (key === "s") {
        sCount++;
        flashBox(sBox);
     } else if (key === "l") {
        lCount++;
        flashBox(lBox);
     }
   
   output.textContent = `S: ${sCount}   |   L: ${lCount}`;



       }

  document.addEventListener("keydown", handleKeyPress);

 
function flashBox(box) {
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 150);
}




  function endGame() {
    gameActive = false;
    console.log("Time is up!");
    restartBtn.style.display = "block";


    if(sCount === 0 && lCount === 0){
        console.log("No keys were pressed. No winner.");
        return;
    }

    if (sCount > lCount) {
        console.log("Player S wins!");
        confetti({
        particleCount: 120,
        spread: 70,
        origin: { x: 0.2, y: 0.5 }
        });

    } else if (lCount > sCount) {
        console.log("Player L wins!");
        confetti({
        particleCount: 120,
        spread: 70,
        origin: { x: 0.8, y: 0.5 }
        });
    } else {
        console.log("It's a draw!");
    }
}
restartBtn.addEventListener("click", function () {
    sCount = 0;
    lCount = 0;
    gameActive = false;
    
    document.getElementById("timeInput").value = "";
    output.textContent = "Enter time and play again!";
});



