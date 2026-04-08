//.  FORMAL NAME FUNCTION

function getFullName(firstName, surname, useFormalName, isFemale) {
  if (!firstName && !surname) {
    return "No name provided";
  }
  const fullName = firstName + " " + surname;
  if (useFormalName) {
    if (isFemale) {
      fullName = "Lady " + fullName;   // for women
    } else if (!firstName && !surname) {
    return "No name provided";
  }{
      fullName = "Lord " + fullName;   // for men
    }
  }
  return fullName;
}

console.log(getFullName("Benjamin", "Hughes", false));  
console.log(getFullName("Benjamin", "Hughes", true));   
console.log(getFullName("Avva", "Svomhi", true, true)); 
console.log(getFullName("", "", true)); 