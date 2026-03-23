
   setTimeout(()=>{
          console.log("Called after 2.5 seconds ");
}, 2500);


    



function logAfterDelay(delay, stringToLog){
    setTimeout(()=>{
        console.log(stringToLog);

        }, delay * 1000)
   
  
        
const button =document.getElementById("clickBtn");
button.addEventListener("click", function() {
            logAfterDelay(5, "Called after 5 seconds");
        })
           
    }

logAfterDelay(5, "This string logged after 5 seconds");
logAfterDelay(3, "This string logged after 3 seconds");


 
function earthLogger (){
    console.log("Earth")
}
function saturnLogger (){
    console.log("Saturn")
}


function planetLogFunction(planetFunction) {
     planetFunction();
}


planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);


  const button = document.getElementById("logLocationBtn");

  button.addEventListener("click", () => {
    // Check if the browser supports geolocation
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Latitude:", lat, "Longitude:", lon);
    
    });

    });
  
    function runAfterDelay(delay, callback){
           setTimeout(()=> {
             callback();
           }, delay * 1000)
    }

    runAfterDelay(4, function() {
           console.log("should be logged after 4 seconds");
    });

    runAfterDelay(2, function() {
           console.log("Runs after 2 seconds");
       });

    runAfterDelay(6, function() {
        console.log("Runs after 6 seconds");
       });



let lastClickTime = 0;

document.addEventListener("click", () => {
  const now = Date.now();

  if (now - lastClickTime < 500) {
    console.log("double click!");
  }

  lastClickTime = now;
});

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    
    if (typeof shouldTellFunnyJoke !== "boolean") {
        console.error("Error: shouldTellFunnyJoke must be a boolean.");
        return;
    }
    if (typeof logFunnyJoke !== "function" || typeof logBadJoke !== "function") {
        console.error("Error: logFunnyJoke and logBadJoke must be functions.");
        return;
    }

    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

function logFunnyJoke() {
    console.log("Funny joke");
}

function logBadJoke() {
    console.log("Bad joke");
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);



