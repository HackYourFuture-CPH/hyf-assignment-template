const dogYearOfBirth=2015;
const dogYearFuture=2045;
let dogYear=dogYearFuture-dogYearOfBirth;

const shouldShowResultInDogYears = false;

const dogAge = shouldShowResultInDogYears ? dogYear * 7 : dogYear;
const type = shouldShowResultInDogYears ? "dog" : "human";

console.log(`Your dog will be ${dogAge} ${type} years old in ${dogYearFuture}`);
