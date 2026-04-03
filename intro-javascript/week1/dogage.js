
const dogYearOfBirth = 2015;
const dogYearFuture = 2027;

// Boolean variable: true = show dog years, false = show human years
const shouldShowResultInDogYears = true;


const dogYear = dogYearFuture - dogYearOfBirth;

//  Check
if (shouldShowResultInDogYears) {

  console.log("Your dog will be " + (dogYear * 7) + " dog years old in " + dogYearFuture + ".");
} else {
  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
}
