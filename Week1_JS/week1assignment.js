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