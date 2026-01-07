const houses = [
  {
    name: "Gryffindor",
    image: "https://i.postimg.cc/2SxW6xGf/gryffindor-logo.png",
    description: "Brave, daring, and chivalrous.",
    color: "#7F0909"
  },
  {
    name: "Hufflepuff",
    image: "https://i.postimg.cc/VsbbMwgZ/Hufflepuff-Logo.png",
    description: "Loyal, patient, and fair-minded.",
    color: "#EEE117"
  },
  {
    name: "Ravenclaw",
    image: "https://i.postimg.cc/NjN0SCb2/Ravenclaw-Logo.png",
    description: "Wise, witty, and creative.",
    color: "#000A90"
  },
  {
    name: "Slytherin",
    image: "https://i.postimg.cc/26nrk0dW/Slytherin-logo.png",
    description: "Cunning, ambitious, and resourceful.",
    color: "#1A472A"
  }
];



const input = document.querySelector("#nameInput");
const button = document.querySelector("#houseBtn");
const result = document.querySelector("#result");
const houseImage = document.querySelector("#houseImage");
const houseDescription = document.querySelector("#houseDescription");

button.addEventListener("click", () => {
  const name = input.value.trim();

  if (name === "") {
    result.textContent = "You must enter your name to be sorted into a house.";
    houseImage.style.display = "none";
    houseDescription.textContent = "";
    houseImage.classList.remove("show");
    houseDescription.classList.remove("show");
    document.body.style.backgroundColor = "";
    return;
  }

  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  result.textContent = `${name} belongs in ${randomHouse.name}!`;

  houseImage.src = randomHouse.image;
  houseImage.alt = randomHouse.name;
  houseImage.style.display = "block";
  houseDescription.textContent = randomHouse.description;

  document.body.style.backgroundColor = randomHouse.color;

  setTimeout(() => {
    houseImage.classList.add("show");
    houseDescription.classList.add("show");
  }, 10);

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ffffff", randomHouse.color]
  });
});
