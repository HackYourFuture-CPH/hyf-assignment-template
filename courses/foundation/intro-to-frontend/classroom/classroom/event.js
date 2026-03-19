const button = document.getElementById("toggleBtn");

// Keep track of current mode: false = light, true = dark
let isDarkMode = false;

button.addEventListener("click", function () {
  // Toggle mode
  if (isDarkMode) {
    // Switch to light mode
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    button.textContent = "Switch to Dark Mode"; // optional
    isDarkMode = false;
  } else {
    // Switch to dark mode
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    button.textContent = "Switch to Light Mode"; // optional
    isDarkMode = true;
  }
});
