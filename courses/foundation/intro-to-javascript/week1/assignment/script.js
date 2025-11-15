// Age-ify
const yearBirth = 1989;
const futureYear = 2040;
const age = futureYear - yearBirth;

console.log(`You will be ${age} years old in ${futureYear}`);

// Goodboy-Oldboy
const dogYearOfBirth = 2025;
const dogYearFuture = 2030;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
}

//Housey pricey (A house price estimator)
//Peter's
const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterCost = 2500000;

const peterVolume = peterWidth * peterDepth * peterHeight;
const peterHousePrice = peterVolume * 2500 + peterGardenSize * 300;

if (peterHousePrice > peterCost) {
    console.log("Peter is paying too little");
} else {
    console.log("Peter is paying too much");
}

//Julia's
const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaCost = 1000000;

const juliaVolume = juliaWidth * juliaDepth * juliaHeight;
const juliaHousePrice = juliaVolume * 2500 + juliaGardenSize * 300;

if (juliaHousePrice > juliaCost) {
    console.log("Julia is paying too little");
} else {
    console.log("Julia is paying too much");
}

//Ez Namey (Startup name generator) Optional
const firstWords = [
    "Easy",
    "Awesome",
    "Corporate",
    "Smart",
    "Next",
    "Bright",
    "Quick",
    "Hyper",
    "Bold",
    "Ultra"
];

const secondWords = [
    "Solutions",
    "Tech",
    "Labs",
    "Systems",
    "Works",
    "Dynamics",
    "Ventures",
    "Hub",
    "Network",
    "Innovations"
];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2]

console.log(`The startup: ${startupName} contains ${startupName.length} characters`)