// Solution #1
function getFullName(firstName, surname) {
  return `${firstName} ${surname}`;
}

let firstName1 = prompt("What is the  first name?");
let surname1 = prompt("What is the  surname?");
let fullName1 = getFullName(firstName1, surname1);
console.log(`Full name 1: ${fullName1}`);

let firstName2 = prompt("What is the  first name?");
let surname2 = prompt("What is the surname?");
let fullName2 = getFullName(firstName2, surname2);
console.log(`Full name 2: ${fullName2}`);


// Solution #2
function getFullName(firstName, surname) {
    return `${firstName} ${surname}`;
}

let fullName1 = getFullName("Anna", "Smith");
let fullName2 = getFullName("Jeppe", "Thor");
console.log(fullName1);
console.log(fullName2);

function useFormalFullName(firstName, surname, useFormalName = false, gender) {
    if (!useFormalName) {
        return `${firstName} ${surname}`;
    }
        if (gender == "male") {
            return `Lord ${firstName} ${surname}`;
        }
       
           return `Lady ${firstName} ${surname}`; 
    }
 
console.log(useFormalFullName("Anna", "Karr", true, "female"));
console.log(useFormalFullName("Anna", "Karr", false, "female"));
console.log(useFormalFullName("Bob", "Smith", true, "male"));
console.log(useFormalFullName("Bob", "Smith", false, "male"));








