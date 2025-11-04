//Age-ify (A future age calculator)
const yearOfBirth=1988;
const yearFuture=2027;
const ageInFuture=yearFuture - yearOfBirth;
console.log("You will be " + ageInFuture + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth=2017;
const dogYearFuture=2027;
const dogYear=dogYearFuture - dogYearOfBirth;
//Calculate the dog’s age in human years
console.log("Calculate the dog’s age in human years");
console.log("The dog will be " + dogYear + " human years old in " +dogYearFuture);

const shouldShowResultInDogYears=true;
if(shouldShowResultInDogYears)
{
    const ageInDogYears=dogYear*7; // 1 human years = 7 dog years so multiply by 7
    console.log("Your dog will be " + ageInDogYears + " dog years old in " + dogYearFuture + " .");
}
else{
    console.log("The dog will be " + dogYear + " human years old in " +dogYearFuture + " .");
}

//Housey pricey (A house price estimator)

const peterWidth=8;
const peterDepth=10;
const peterHeight=10;
const peterGardenSize=100;
const peterEstimatedHouseCost=2500000;

const juliaWidth=5;
const juliaDepth=11;
const juliaHeight=8;
const juliaGardenSize=70;
const juliaEstimatedHouseCost=1000000;

const peterVolumeInMeters=peterWidth * peterDepth * peterHeight; //Calculating the value for Volume in meters.
const peterPaidPrice=peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300; //Applying this formula to find the actual housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

const juliaVolumeInMeters=juliaWidth * juliaDepth * juliaHeight;//Calculating the value for Volume in meters.
const juliaPaidPrice=juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;//Applying this formula to find the actual housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//Calculate Peter's Price
if(peterEstimatedHouseCost < peterPaidPrice)
{
     console.log("Peter is paying too much for the house.");
}
else {
  console.log("Peter is paying too little for the house.");
}

//Calculate Julia's Price
if(juliaEstimatedHouseCost < juliaPaidPrice)
{
     console.log("Julia is paying too much for the house.");
}
else {
  console.log("Julia is paying too little for the house.");
}

//Ez Namey (Startup name generator) 

const firstWords = ["Easy", "Awesome", "Corporate", "Super", "Bright", "Next", "Creative", "Tech", "Smart", "Happy"];
const secondWords = ["Solutions", "Corp", "Labs", "Studios", "Works", "Systems", "Innovations", "Ventures", "Hub", "Factory"];

const randomIndex1 = Math.floor(Math.random() * firstWords.length); 
const randomIndex2= Math.floor(Math.random() * secondWords.length); 

/*console.log(Math.random()* firstWords.length);//gives value between 0 and 1
console.log(Math.floor(Math.random() * firstWords.length));// Round off the value from 0 to */

console.log("Random Index value from firstWordsArray: " + randomIndex1);
console.log("Random Index value from secondWordsArray: " + randomIndex2);

const startUpName=firstWords[randomIndex1] + " " + secondWords[randomIndex2];

console.log("Startup Name :" + startUpName);

const nameLength=startUpName.length;
console.log(`The startup: "${startUpName}" contains ${nameLength} characters`); //Tried template literal to print the name and its length


/*const arr1=["Hello","World"];
console.log(Math.random());
console.log(arr1.length);
console.log(Math.floor(Math.random()*arr1.length));*/