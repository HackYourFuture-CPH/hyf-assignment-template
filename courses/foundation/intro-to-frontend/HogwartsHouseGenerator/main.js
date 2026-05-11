
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

document.getElementById("sortButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    document.getElementById("result").textContent = "Please enter your name first!";
    return;
  }

  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  document.getElementById("result").textContent = `${name} belongs in ${randomHouse}!`;
});