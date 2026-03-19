paragraph = document.getElementById("paragraph");
btn = document.getElementById("btn");

/* setTimeout(()=>{
 paragraph.textContent="Called after 2.5 seconds";
},2500); */

function showStringAfterDelay(delay, stringToLog) {
  setTimeout(() => {
    paragraph.textContent = stringToLog;
  }, delay);
}

btn.addEventListener("click", () => showStringAfterDelay(3000, "Hi I'm here"));

const earth = function () {
  console.log("Earth");
};

//Planet

const saturn = () => {
  console.log("Saturn");
};

function planetLogFunction(planet) {
  planet();
}

planetLogFunction(earth);
planetLogFunction(saturn);

//Log location
btnLocation = document.getElementById("btnLocation");
latitude = document.getElementById("latitude");
longitude = document.getElementById("longitude");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude.textContent = "Latitude :" + position.coords.latitude;
        longitude.textContent = "Longitude :" + position.coords.longitude;
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

btnLocation.addEventListener("click", getLocation);

//runAfterDelay

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}

runAfterDelay(4000, () => {
  console.log("should be logged after 4 seconds");
});

//Double click
function doubleClick() {
  let clickCount = 0;
  let timer = null;

  document.addEventListener("click", function () {
    clickCount++;

    // If this is the first click, start a 0.5s timer
    if (clickCount === 1) {
      timer = setTimeout(() => {
        // Reset after 0.5s if no double click happened
        clickCount = 0;
      }, 500);
    } else if (clickCount === 2) {
      // Second click happened within 0.5s double click
      console.log("double click!");
      clearTimeout(timer); // stop the timer
      clickCount = 0; // reset counter
    }
  });
}

doubleClick();

//Joke creator

function logFunnyJoke() {
  console.log(
    "Why did the math book look sad? Because it had too many problems!",
  );
}

function logBadJoke() {
  console.log(
    "Why don’t skeletons fight each other? They don’t have the guts!",
  );
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
