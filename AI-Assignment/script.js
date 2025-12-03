function changeBackground() {
  const colors = ['#f0f8ff', '#ffe4e1', '#e6ffe6', '#fff0f5', '#f5f5dc', '#d1e0e0'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
