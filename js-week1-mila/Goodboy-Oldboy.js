const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

const  ageInHumanYears = dogYearFuture - dogYearOfBirth;
const  ageInDogYears = ageInHumanYears *7 ;


const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + ageInDogYears + " dog years old in " + dogYearFuture + ".");
} else {
  console.log("Your dog will be " + ageInHumanYears + " human years old in " + dogYearFuture + ".");
}

