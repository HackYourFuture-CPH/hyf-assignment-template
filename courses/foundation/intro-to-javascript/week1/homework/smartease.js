const yearOfBirth = 1999;
const yearFuture = 2050;
const age = (birth, future) => {
  console.log(`You will be  ${future - birth} years old in ${future}`);
};
age(yearOfBirth, yearFuture);
//dog age calculator
const dogYearOfBirth = 2010;
const dogYearFuture = 2025;
const shouldShowResultInDogYears = true;
const dogYear = (birth, future, isDogYears) => {
  let dogAge = future - birth;
  console.log(
    `Your dog will be ${
      isDogYears ? dogAge * 7 : dogAge
    } dog years old in ${future}`
  );
};
dogYear(dogYearOfBirth, dogYearFuture, shouldShowResultInDogYears);
//house price calculator

const widthPeter = 8;
const depthPeter = 10;
const heightPeter = 10;
const gardenPeter = 100;
const actualPricePeter = 2500000;

const volumePeter = widthPeter * depthPeter * heightPeter;
const housePricePeter = volumePeter * 2.5 * 1000 + gardenPeter * 300;

if (housePricePeter < actualPricePeter) {
  console.log(
    "Peter is paying too much. His calculated price is " + housePricePeter + "."
  );
} else {
  console.log(
    "Peter is paying too little. His calculated price is " +
      housePricePeter +
      "."
  );
}

// Julia's house
const widthJulia = 5;
const depthJulia = 11;
const heightJulia = 8;
const gardenJulia = 70;
const actualPriceJulia = 1000000;

const volumeJulia = widthJulia * depthJulia * heightJulia;
const housePriceJulia = volumeJulia * 2.5 * 1000 + gardenJulia * 300;

if (housePriceJulia < actualPriceJulia) {
  console.log(
    "Julia is paying too much. Her calculated price is " + housePriceJulia + "."
  );
} else {
  console.log(
    "Julia is paying too little. Her calculated price is " +
      housePriceJulia +
      "."
  );
}

// 🚀 4. Ez Namey (Startup Name Generator)

const firstWords = [
  "Easy",
  "Awesome",
  "Tech",
  "Smart",
  "Next",
  "Quick",
  "Blue",
  "Creative",
  "Bright",
  "Happy",
];
const secondWords = [
  "Solutions",
  "Systems",
  "Corporation",
  "Designs",
  "Hub",
  "Works",
  "Concepts",
  "Labs",
  "Group",
  "Innovations",
];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const nameLength = startupName.length;

console.log(
  'The startup: "' + startupName + '" contains ' + nameLength + " characters."
);
