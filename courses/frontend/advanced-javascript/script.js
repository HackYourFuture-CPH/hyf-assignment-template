

async function getCurrencies() { 
      try {
            const res = await fetch("https://open.er-api.com/v6/latest/EUR");
            const data = await res.json();
            return data.rates;

        } catch(err) {
    throw "Fetching the currencies went wrong";
}
   }

   async function setUp() {
        try { 
              const rates = await getCurrencies();
              const currencyList = Object.keys(rates);

              const fromSelect = document.getElementById("from");
              const toSelect = document.getElementById("to");

     currencyList.forEach(code => {
        const option1 = document.createElement("option");
        option1.value = code;
        option1.textContent = code;

        const option2 = option1.cloneNode(true);     // copy option1 for the second dropdown

        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    });

    fromSelect.value = "EUR";
    toSelect.value = "DKK";
    
    convert(rates);

document.getElementById("amount").addEventListener("input", () => convert(rates));
document.getElementById("from").addEventListener("change", () => convert(rates));
document.getElementById("to").addEventListener("change", () => convert(rates));
   
 } catch (err) {
             document.getElementById("result").textContent =
            "Could not load currency data. Please try again later.";

              }

           }



function convert(rates) {
   
    const amount = Number(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!amount) {
        document.getElementById("result").textContent = "Converted amount will appear here";
        return;
    }

    const result = amount * (rates[to] / rates[from]);

    document.getElementById("result").textContent =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

setUp();

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



