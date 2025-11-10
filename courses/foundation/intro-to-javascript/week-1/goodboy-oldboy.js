const dogYearOfBirth = 2020;
let dogYearFuture = 2027;

let humanYear = dogYearFuture - dogYearOfBirth;
let dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + humanYear + " human years old in " + dogYearFuture
  );
}
