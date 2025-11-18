function getFullName(firstName = "John", surname = "Doe", useFormalName) {
  if (useFormalName) {
    return "Lord " + firstName + " " + surname;
  } else {
    return firstName + " " + surname;
  }
}

const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("Anastasia", "Solodova");
const fullName3 = getFullName();

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

// What if the person is a woman? We need to add extra parameter with gender
