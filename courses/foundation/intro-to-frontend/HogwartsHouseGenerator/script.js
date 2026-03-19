const houses = [
  {
    name: "Gryffindor",
    color: "#740001",
    description: "Brave, daring, and chivalrous.",
    image: "https://i.pinimg.com/1200x/99/09/3c/99093c0e1cf4ba5b207e03b4babdf3f7.jpg"
  },
  {
    name: "Hufflepuff",
    color: "#ffdb00",
    description: "Loyal, patient, and fair.",
    image: "https://i.pinimg.com/1200x/3d/af/c1/3dafc187a67cd577508762150985f65c.jpg"
  },
  {
    name: "Ravenclaw",
    color: "#222f5b",
    description: "Intelligent, wise, and witty.",
    image: "https://i.pinimg.com/1200x/74/50/89/7450897d3dd45fbebaceadce3df15e43.jpg"
  },
  {
    name: "Slytherin",
    color: "#1a472a",
    description: "Ambitious, cunning, and resourceful.",
    image: "https://i.pinimg.com/1200x/4f/e3/a4/4fe3a4aed32901f848d9dd12c5d1f5de.jpg"
  }
];

const input = document.getElementById("name");
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const name = input.value.trim();

  if (!name) {
    alert("Please enter your name!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * houses.length);
  const house = houses[randomIndex];

  result.innerHTML = `
    <h2 style="color: ${house.color}">${name} belongs in ${house.name}!</h2>
    <p>${house.description}</p>
    <img src="${house.image}" alt="${house.name} crest">
  `;

  result.classList.add("show");
});
