 function getRandomColor() {

    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  document.getElementById('submit').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });