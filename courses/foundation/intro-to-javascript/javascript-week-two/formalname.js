




function getFullName (firstName, lastName, useFormalName, gender) {
    

    if (useFormalName) {
        return "Lord" + " " + firstName + " " + lastName;
    } 
    else (gender === "female") 
        return "Lady" + " " + firstName + " " + lastName;
    }

    
     
    

console.log(getFullName("Benjamin" ,  "Hughes" , true )); // returns "Lord Benjamin Hughes"
console.log(getFullName("Emma" , "Frank" , false, "Lady" ));  // return "Lady Emma Frank"

