const submitBtn = document.querySelector(".submit-button");
const resultP = document.querySelector(".results-paragraph");
const form = document.querySelector(".hogwarts-form");
const input = document.querySelector(".name-input");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

function getRandomHouse(houses) {
  const randomNumber = Math.floor(Math.random() * houses.length);
  return houses[randomNumber];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameFromInput = input.value;

  const randomHouse = getRandomHouse(houses);

  if (randomHouse === "Gryffindor") {
    document.body.style.backgroundImage = `url(https://images3.alphacoders.com/556/556467.jpg)`;
    resultP.style.color = "#AE0001";
  }

  if (randomHouse === "Hufflepuff") {
    document.body.style.backgroundImage = `url(https://wallpapercave.com/wp/wp1958741.jpg)`;
    resultP.style.color = "#ECB939";
  }

  if (randomHouse === "Ravenclaw") {
    document.body.style.backgroundImage = `url(https://wallpapercave.com/wp/wp4237988.png)`;
    resultP.style.color = "#2350e2ff";
  }

  if (randomHouse === "Slytherin") {
    document.body.style.backgroundImage = `url(https://images6.alphacoders.com/556/thumb-1920-556486.jpg)`;
    resultP.style.color = "#38a55eff";
  }

  resultP.textContent = `${nameFromInput} belongs to ${randomHouse}!`;
});
