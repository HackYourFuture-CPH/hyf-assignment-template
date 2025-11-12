




function getFullName (firstName, lastName, useFormalName ) {
   
    if (useFormalName) {
       
    return "Lord"  + " " + firstName + " " + lastName;
} 
   else {
    return firstName + " " + lastName;
   }
}
console.log(getFullName("Benjamin" ,  "Hughes" , true ));
console.log(getFullName("Benjamin" , "Hughes" , false ));

