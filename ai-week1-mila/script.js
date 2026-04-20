const changeBgButton = document.querySelector('button');

if (changeBgButton) {
  changeBgButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return color;}