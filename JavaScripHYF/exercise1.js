// Age Calculator
let yearOfBirth = 1990;
let yearFuture = 2190;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);  

// Dog Age Calculator
let dogYearOfBirth = 2023;
let dogYearFuture = 2026;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  let ageInDogYears = dogYear * 7;
  console.log("Your dog will be " + ageInDogYears + " dog years old in " + dogYearFuture);
} else {
  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
} 

// House Price Calculator
housePrise = volumeInMeters = 2.5 * 1000 + gardenSizeInM2 * 300;

let peterWidth = 8;
let peterDepth = 10;
let peterHeight = 10;
let peterGardenSizeInM2 = 100;
let peterHousePrice = 2500000;
let peterVolumeInMeters = peterWidth * peterDepth * peterHeight;
let peterCalculatedPrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

if (peterCalculatedPrice < peterHousePrice) {
  console.log("Peter is paying too much.");
} else if (peterCalculatedPrice > peterHousePrice) {
  console.log("Peter is paying too little.");
} else {
  console.log("Peter is paying the correct price.");
}

let juliaWidth = 5;
let juliaDepth = 11;
let juliaHeight = 8;
let juliaGardenSizeInM2 = 70;
let juliaHousePrice = 1000000;
let juliaVolumeInMeters = juliaWidth * juliaDepth * juliaHeight;
let juliaCalculatedPrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

if (juliaCalculatedPrice < juliaHousePrice) {
  console.log("Julia is paying too much.");
} else if (juliaCalculatedPrice > juliaHousePrice) {
  console.log("Julia is paying too little.");
} else {
  console.log("Julia is paying the correct price.");
}

// Startup name generator
let firstWords = ["Easy", "Awesome", "Corporate", "Red", "Blue", "Green", "Big", "Smart", "Nice", "Super"];
let secondWords = ["App", "Solution", "Tech", "Systems", "Code", "Web", "Works", "Corp", "Data", "Cloud"];

let randomIndex = Math.floor(Math.random() * 10);
let startupName = firstWords[randomIndex] + " " + secondWords[randomIndex];
let startupNameLength = startupName.length;

console.log("The startup: " + startupName + " contains " + startupNameLength + " characters."); 


