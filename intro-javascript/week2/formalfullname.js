function getFullName(firstName, surName, useFormalName, gender) {
  let fullName = firstName + " " + surName;
  if (useFormalName && gender === "female") {
    fullName = "Lady " + fullName;
  } else if (useFormalName && gender !== "female") {
    fullName = "Lord " + fullName;
  } else {
    fullName = fullName;
  }

  return fullName;
}

const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("jack", "son", true, "female");
const fullName3 = getFullName("julia", "paul", false);
const fullName4 = getFullName("", "paul", false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);

// https://codepen.io/Rufaisashah/pen/zxqxZEZ