const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("nameInput");
const sortButton = document.getElementById("sortButton");
const result = document.getElementById("result");

function getRandomHouse() {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

function assignHouse() {
  const name = nameInput.value.trim();
  if (!name) {
    result.textContent = "⚠️ Please enter your name first!";
    return;
  }

  const house = getRandomHouse();
  result.textContent = `${name} belongs in ${house}!`;

  // Change button text to "Try again" after first use
  sortButton.textContent = "Try again";
}

sortButton.addEventListener("click", assignHouse);
