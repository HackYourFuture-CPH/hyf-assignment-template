// Step 1: Get the button from our HTML
let colorButton = document.getElementById("colorButton");

// Step 2: Create a function that changes the background color
function changeColor() {
  // Generate a random number between 0 and 360
  let hue = Math.floor(Math.random() * 360);

  // Create a color using HSL (Hue, Saturation, Lightness)
  let newColor = "hsl(" + hue + ", 70%, 80%)";

  // Apply the color to the page background
  document.body.style.backgroundColor = newColor;
}

// Step 3: Make the button run our function when clicked
colorButton.onclick = changeColor;
