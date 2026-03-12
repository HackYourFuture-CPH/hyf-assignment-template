const buttonElement = document.getElementById('colorButton');

if (buttonElement) {
  buttonElement.addEventListener('click', () => {
    console.log('Button clicked');

    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    document.body.style.backgroundColor = randomColor;
  });
}