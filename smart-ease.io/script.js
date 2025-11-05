const yearOfBirth  = 1988; //Number
const  yearFuture = 2027; //Number
const age = yearFuture - yearOfBirth
console.log(`You wll be ${age} years old in 2027.`)




const dogYearOfBirth = 2018;
const dogYearFuture = 2027;
 const dogYear = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogYear * 7; 
let shouldShowResultInDogYears  //Boolean
if(shouldShowResultInDogYears == true){
 dogAgeInDogYears 
    console.log(`Your dog will be ${dogAgeInDogYears} years old in 2027`)
}else{
    dogYear 
    console.log(`Your dog will be${dogYear} human years old in 2027`)
}






let depth;
let height;
let width;
let volumeInMeters  = depth * height * width;
let gardenSizeInM2;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. 
// The garden size is 100m2. The house costs 2.500.000. 
volumeInMeters = 10 * 10 * 8;
housePrice = volumeInMeters * 2.5 * 1000 + 100 * 300;
console.log(`Peter's housePrice is ${ housePrice}`); //2030000
//Peter is paying too much

// Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high.
//  The garden size is 70m2. This house costs 1.000.000.
volumeInMeters = 11 * 8 * 5;
housePrice = volumeInMeters * 2.5 * 1000 + 70 * 300;
console.log(`Julia's housePrice is : ${housePrice}`) // 1121000
//Julia is paying too little 


const firstWords = [
  "Easy", "Awesome", "Bright", "Swift", "Nova",
  "Happy", "Control", "Pixel", "Blue", "Quantum"
];

const secondWords = [
  "Corp", "Labs", "Works", "Hub", "Studio",
  "Systems", "Networks", "Solutions", "Factory", "Collective"
];

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + secondWords[randomNumber]
console.log(startupName)
const length = startupName.length;
console.log(`The startup: ${startupName} contains ${length} characters`);