function changeBackground() {
  try {
    const colors = [
      "#f0f8ff", // Alice Blue
      "#ffe4e1", // Misty Rose
      "#e6ffe6", // Mint Green
      "#fff0f5", // Lavender Blush
      "#f5f5dc", // Beige
      "#d1e0e0", // Light Blue-Gray
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    document.body.style.backgroundColor = randomColor;
  } catch (error) {
    console.error("Error changing background color:", error);
  }
}

// Call function on page load
document.addEventListener("DOMContentLoaded", changeBackground);

// Optional: Add a button to manually change colors
document.addEventListener("DOMContentLoaded", () => {
  const changeColorBtn = document.getElementById("changeColorBtn");
  if (changeColorBtn) {
    changeColorBtn.addEventListener("click", changeBackground);
  }
});
