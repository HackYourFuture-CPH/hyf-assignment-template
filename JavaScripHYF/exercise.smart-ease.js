//The full name exercise.
function getFullName(firstName, lastName,useFormalName ) {
    let fullName =` ${firstName} ${lastName}`

   return useFormalName ? `Lord ${fullName}` : fullName;

}

const fullName1 = getFullName("John", "Doe");
const fullName2 = getFullName("Jane", "Smith");

console.log(fullName1); 
console.log(fullName2); 

// Event application
function getEventWeekday(numberOfDaysFromToday) {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + numberOfDaysFromToday);
    
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdays[targetDate.getDay()];

    return weekday;
}

console.log(getEventWeekday(9)); 

// Weather wear
function getWearByWeather(temperature) {
    if (temperature < 0) {
        return "Heavy winter coat, gloves, and a hat";
    } else if (temperature >= 0 && temperature < 10) {
        return "Winter jacket and warm layers";
    } else if (temperature >= 10 && temperature < 18) {
        return "Light jacket or sweater";
    } else 
        return "Shorts and a t-shirt";
}

const clothesToWear = getWearByWeather(18);
console.log(clothesToWear); 

//Student menager
const class07Students = [];

function addStudentToClass(studentName) {

    if (studentName === 'Queen Mary') {
        class07Students.push(studentName);
        return;
    }

    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
      return;
    }

    if (studentName=== '') {
        console.log('You cannot add an empty name');
        return;
    }

  if(class07Students.length >= 6) {
    console.log('Cannot add more students to class 07');
    return;
  }


    class07Students.push(studentName);

}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass('Alice');
addStudentToClass('Bob');
addStudentToClass('Charlie');
addStudentToClass('David');
addStudentToClass('Eve');
addStudentToClass('Frank');
addStudentToClass('Grace');
addStudentToClass('Queen Mary');
addStudentToClass('');
addStudentToClass('Alice');
addStudentToClass('Queen Mary');

console.log(getNumberOfStudents());

//Candy helper
const boughtCandyPrices = [];

function addCandy(candyType, weight){
let price;
    if(candyType === "sweet"){  
        price = 0.5 * weight;
    } else if(candyType === "chocolate"){
        price = 0.7 * weight;
    } else if(candyType === "toffee"){
        price = 1.1 * weight;
    } else if(candyType === "chewing-gum"){
        price = 0.03 * weight;
    }
    boughtCandyPrices.push(price);

}

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy(){
    let totalSpent = 0;
    for(let i = 0; i < boughtCandyPrices.length; i++){
        totalSpent += boughtCandyPrices[i];
    }
    return totalSpent < amountToSpend;
}

addCandy("sweet", 10);
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}


addCandy("chocolate", 5);
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}

addCandy("toffee", 2);
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}

addCandy("chewing-gum", 50);
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}

