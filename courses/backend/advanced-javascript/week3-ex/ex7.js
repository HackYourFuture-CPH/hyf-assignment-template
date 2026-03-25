const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Test it:
console.log("Starting...");
wait(1000).then(() => console.log("1 second passed!"));