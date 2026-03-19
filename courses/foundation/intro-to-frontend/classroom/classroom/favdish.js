// 1. Create an array of favourite dishes
const favDish = ["Pizza", "Pasta", "Burger", "Sushi"];

// 2. Select the ul from the DOM
const ul = document.getElementById("dishesList");

// 3. Loop through the array
for (let i = 0; i < favDish.length; i++) {
  // 4. Create an li element
  const li = document.createElement("li");

  // 5. Set the text of the li
  li.textContent = favDish[i];

  // 6. Add the li to the ul
  ul.appendChild(li);
}
