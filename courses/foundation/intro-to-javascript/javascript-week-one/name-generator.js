const firstWords = ["Easy", "Awesome", "Super", "NextGen", "Quantum", "Bright", "Dynamic", "Hyper", "Smart", "Epic"];
const secondWords = ["Tech", "Solutions", "Labs", "Works", "Systems", "Enterprises", "Network", "Hub", "Factory", "Corp"];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: " + startupName + " contains " + startupName.length + " characters.");
