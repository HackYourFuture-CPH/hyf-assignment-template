//Task1. Display the text Called after 2.5 seconds
// on the page 2.5 seconds after the script is loaded.

const myTimeout = setTimeout(message, 2500, "task1-output");
function message(outputId) {
  document.getElementById(outputId).textContent = "Called after 2.5 seconds";
}

// Task2. Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should display the stringToLog on the page after delay seconds.
// Call the function you have created with some different arguments.

function logAfterDelay(delay, stringToLog, outputId) {
  setTimeout(() => {
    const container = document.getElementById(outputId);
    const newLine = document.createElement("p");
    newLine.textContent = stringToLog;

    container.appendChild(newLine);
  }, delay * 1000);
}
logAfterDelay(3, "Called after 3 seconds", "task2-output");
logAfterDelay(4, "Called after 4 seconds", "task2-output", "task2-output");

// Task3. Create a button in html.
// When clicking this button,
//  use the function you created in the previous task
// to display the text Called after 5 seconds on the page
//  5 seconds after the button is clicked.

let clickCount = 0;
const element = document.getElementById("btn-click");
element.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 1) {
    logAfterDelay(5, "Called after 5 seconds", "task3-output");
  }
});

// Task 4.Create two functions and assign them to two different variables.
// One function displays Earth on the page,
// the other displays Saturn.
// Now create a new third function that has one parameter:
// planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try calling the third function once with the Earth function and once with the Saturn function.
let earthLogger = function () {
  document.getElementById("task4-earth-output").textContent = "Earth";
};

let saturnLogger = function () {
  document.getElementById("task4-saturn-output").textContent = "Saturn";
};

function planetLogFunction(planetFunction) {
  planetFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// Task5.Create a button with the text "Log location". When this button is clicked, display the user's location (latitude, longitude) on the page using this browser API.

const btnLocation = document.getElementById("btn-location");
btnLocation.addEventListener("click", function () {
  let location = document.getElementById("location-output");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    location.innerHTML = "Geolocation is not supported by this browser.";
  }
});
function showPosition(position) {
  document.getElementById("location-output").innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

// Task7. Create a function called runAfterDelay.
// It has two parameters: delay and callback.
// When called the function should wait delay seconds
// and then call the provided callback function.
// Add an input in the HTML for the delay (in seconds)
// and a button; when the button is clicked,
// read the delay from the input and call runAfterDelay with that delay
// and a callback that displays something on the page.

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

document.getElementById("btn-run").addEventListener("click", function () {
  const delay = document.getElementById("delay-input").value;

  runAfterDelay(delay, function () {
    document.getElementById("run-output").textContent =
      "Done after " + delay + " seconds";
  });
});

// Task8. Check if the user has double-clicked on the page.
// A double click is two clicks within 0.5 seconds.
// If a double click is detected, display the text "double click!" on the page.
let lastClickedTime = 0;
document.addEventListener("click", function (event) {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickedTime < 500) {
    document.getElementById("double-click-output").textContent =
      "double click!";
  }
  lastClickedTime = currentTime;
});

// Task9. Create a function called jokeCreator that has three parameters:
// shouldTellFunnyJoke (boolean),
// logFunnyJoke (function),
// and logBadJoke (function).
// If shouldTellFunnyJoke is true
// it should call logFunnyJoke,
// which displays a funny joke on the page.
// Otherwise it should call logBadJoke,
// which displays a bad joke on the page.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
function logFunnyJoke() {
  document.getElementById("joke-output").textContent =
    "Why don’t programmers like nature? Because it has too many bugs.";
}
function logBadJoke() {
  document.getElementById("joke-output").textContent =
    "What do you call a fish wearing a bowtie? Sofishticated.";
}

document.getElementById("btn-funny").addEventListener("click", function () {
  jokeCreator(true, logFunnyJoke, logBadJoke);
});

document.getElementById("btn-bad").addEventListener("click", function () {
  jokeCreator(false, logFunnyJoke, logBadJoke);
});
