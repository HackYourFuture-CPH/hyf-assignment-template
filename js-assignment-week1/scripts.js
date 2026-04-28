console.log("Hello HYF");
const yearFuture = 2027;
const age = 40;

// Calculate year of birth based on future year and age
const yearOfBirth = yearFuture - age;

console.log("You will be " + age + " years old in " + yearFuture);
// dog age calculator
let dogYearOfBirth=2017;
let dogFutureYear=2027;
 // calculate dog age
const dogYear= dogFutureYear - dogYearOfBirth;
 //control variable to show result in dog years or human years
let shouldShowResultInDogYears=false; // change to true if you want to see dog years
 //conditional output
if (shouldShowResultInDogYears){
  console.log("Your dog will be " +(dogYear * 7)+ "dog years old in "+dogFutureYear); }
else {
    console.log (" Your dog will be " +dogYear + " human years old in " + dogFutureYear);
  }
 

//house price estimator
//peter's house details
const peter={
  width:8,
  depth:10,
  height:10,
  gardenSizeInM2:100,
  cost:2500000};
;
 // julia's house details
const julia={
  width:5,
  depth:11,
  height:8,
  gardenSizeInM2:70,
  cost:1000000};
  
// peter's calculation
const peterVolume= peter.width * peter.height * peter.depth;
const peterEstimatedPrice=peterVolume*2.5*1000+ peter.gardenSizeInM2*300;
if (peter.cost>peterEstimatedPrice){
  console.log ("peter is paying to much. Estimated price is" +peterEstimatedPrice)
}
else if(peter.cost<peterEstimatedPrice){
  console.log("peter is paying too little. Estimated price is" +peterEstimatedPrice)}
else {
    console.log("peter is paying exactly the estimating price. Estimated price is" +peterEstimatedPrice);
  }

// julia's calculation
const juliaVolume= julia.width * julia.height * julia.depth;
const juliaEstimatedPrice=juliaVolume*2.5*1000+ julia.gardenSizeInM2*300;
if (julia.cost>peterEstimatedPrice){
  console.log ("julia is paying to much. Estimated price is" +juliaEstimatedPrice)
}
else if(julia.cost<peterEstimatedPrice){
  console.log("julia is paying too little. Estimated price is" +juliaEstimatedPrice)}
else {
    console.log("julia is paying exactly the estimating price. Estimated price is" +juliaEstimatedPrice);
  }
//startup name generator
let firstWords=["easy","awesome","corporate", "innovative", "creative", "dynamic", "visionary", "motivated", "committed","interested"];
let secondWords=["solutions", "technologies", "concepts", "systems", "services", "platforms", "networks", "paradigms", "initiatives","models"];
let startUpName= firstWords[Math.floor(Math.random() * 10)]
 + " " + secondWords[Math.floor(Math.random() * 10)];
 console.log ("Your startup name is: " + startUpName);
 console.log(" The number of characters is: " + startUpName.length)
