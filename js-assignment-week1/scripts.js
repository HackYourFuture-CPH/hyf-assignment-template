console.log("Hello HYF");
let yearFuture = 2027;
let age = 40;

// Calculate year of birth based on future year and age
let yearOfBirth = yearFuture - age;

console.log("You will be " + age + " years old in " + yearFuture);
// dog age calculator
let dogYearOfBirth;
let dogYearFuture;
let dogYear;
let shouldShowResultInDogYears=true;
//calculate dog year of birth
 dogAge=10;
dogYearOfBirth=dogYearFuture-dogAge;
dogYearFuture=2027;
if(shouldShowResultInDogYears){
    dogYear=dogAge*7;
    console.log("Your dog will be " + dogYear + " dog years old in" + dogYearFuture);
}
//house price estimator
//peter's house details
const peter={
    Width:8,
    Depth:10,
    Height:10,
 gardenSizeInM2:100,
 cost:2500000,};
;
 // julia's house details
 const julia={Width:5,
    Depth:11,
    Height:8,
 gardenSizeInM2:70,
 cost:1000000,};
  // Function to calculate volume
function calculateVolume(house) {
  return house.width * house.depth * house.height;
}

// Function to calculate estimated price
function calculateEstimatedPrice(house) {
  const volume = calculateVolume(house);
  return volume * 2.5 * 1000 + house.gardenSizeInM2 * 300;
}

// Calculate prices
const peterHousePrice = calculateEstimatedPrice(peter);
const juliaHousePrice = calculateEstimatedPrice(julia);

console.log("Is Peter's house price higher than Julia's? " + (peterHousePrice > juliaHousePrice));
//startup name generator
let firstWords=["easy","awesome","corporate", "innovative", "creative", "dynamic", "visionary", "motivated", "committed","interested","reliable","focused"];
let secondWords=["solutions", "technologies", "concepts", "systems", "services", "platforms", "networks", "paradigms", "initiatives", "channels", "synergies"];
let startUpName= firstWords[Math.floor(Math.random() * 10)]
 + " " + secondWords[Math.floor(Math.random() * 10)];
 console.log ("Your startup name is: " + startUpName);
 console.log(" The number of characters is: " + startUpName.length)
