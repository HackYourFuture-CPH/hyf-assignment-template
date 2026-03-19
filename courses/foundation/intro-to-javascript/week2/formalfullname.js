function getFullName(
  firstName,
  surname,
  useFormalName = false,
  gender = "male"
) {
  if (!firstName || !surname) {
    return "Please provide both first name and surname.";
  }
  let fullname = "" + firstName + " " + surname;
  if (useFormalName) {
    if (typeof gender === "string" && gender.toLowerCase() === "female") {
      fullname = "Lady. " + fullname;
    } else {
      fullname = "Lord. " + fullname;
    }
  }
  return fullname;
}
console.log(getFullName("John", "Doe")); // John Doe
console.log(getFullName("Jane", "Smith", true, "female")); // Lady. Jane Smith
console.log(getFullName("Emma", "Watson", true)); // Lord. Alice Johnson
console.log(getFullName("", "Brown")); // Please provide both first name and surname.3
