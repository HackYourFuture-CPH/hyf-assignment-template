//Log text after 2.5 seconds
setTimeout(function () {
  console.log("Called after 2.5 seconds");
}, 2500);

//Function with delay and string
function logAfterDelay(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 1000);
}

// Calling the function
logAfterDelay(2, "Hello after 2 seconds");
logAfterDelay(4, "Hello after 4 seconds");

// Adding event listener to the button

document.getElementById("delayBtn").addEventListener("click", function () {
  logAfterDelay(5, "Called after 5 seconds");
});

// Function that logs Earth and Saturn
const logEarth = () => {
  document.getElementById("planets").textContent = "Earth";
};

const logSaturn = () => {
  document.getElementById("planets").textContent = "Saturn";
};
function logPlanet(planetLogFunction) {
  planetLogFunction();
}

// Call the function
logPlanet(logEarth);
logPlanet(logSaturn);

// Geolocation

document.getElementById("locationBtn").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
});
// Open Google Maps with the current location
document.getElementById("locationBtn").onclick = function () {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
  });
};
// Function to run a callback after a delay
const runAfterDelay = (delay, callback) => setTimeout(callback, delay * 1000);

document.getElementById("btn").onclick = () => {
  const delay = parseFloat(document.getElementById("delayInput").value);
  runAfterDelay(delay, () => {
    document.getElementById("output").textContent =
      `Done after ${delay} seconds!`;
  });
};
// Double click event listener
document.addEventListener("dblclick", () => {
  document.getElementById("msg").textContent = "double click!";
});
// Joke creator function
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) =>
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();

const logFunnyJoke = () => {
  document.getElementById("joke").textContent =
    "Why don’t programmers like nature? Too many bugs 😂";
};

const logBadJoke = () => {
  document.getElementById("joke").textContent =
    "I told my computer a joke… it didn’t laugh 😐";
};
document.getElementById("funnyJokeBtn").addEventListener("click", () => {
  jokeCreator(true, logFunnyJoke, logBadJoke);
});

document.getElementById("badJokeBtn").addEventListener("click", () => {
  jokeCreator(false, logFunnyJoke, logBadJoke);
});

// 3.1 Array with functions
const functionsArray = [
  () => (document.getElementById("arrayFuncs").textContent += "Function 1, "),
  () => (document.getElementById("arrayFuncs").textContent += "Function 2, "),
  () => (document.getElementById("arrayFuncs").textContent += "Function 3"),
];

functionsArray.forEach((fn) => fn());

// 3.2 Function declaration vs function expression

// function declaration
function sayHello() {
  console.log("Hello from declaration");
}

// function expression using const
const sayHi = () => {
  console.log("Hello from const function");
};

// call both
sayHello();
sayHi();

// 3.3 Function inside an object
const myObject = {
  logMessage: () => console.log("Hello from object function"),
};

// call function
myObject.logMessage();
