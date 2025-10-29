// Change the page background to a random color when the button is clicked.

function randomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".color-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const color = randomHexColor();
    document.body.style.backgroundColor = color;
  });
});
