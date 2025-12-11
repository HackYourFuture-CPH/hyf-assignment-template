

function getFullName(firstName, surname, useFormalName, gender){

let fullName= firstName + " " + surname;
if (useFormalName){if
    (gender==='male'){
fullName="Lord"+" "+fullName;}
else if (gender==='female'){
    fullName="Lady"+" "+fullName;
}
    }
return fullName;
}
//declaring variables with string variables
let fullName1=getFullName('julian', 'Ali', true,'female'); 
let fullName2=getFullName('Anna', 'peter', true,'male');
//output
console.log(fullName1);
console.log(fullName2);