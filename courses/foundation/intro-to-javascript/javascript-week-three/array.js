const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

// Find the index
const index = names.indexOf(nameToRemove);

// Remove it if it exists
if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);
// ["Peter", "Yana", "kristina", "Rasmus", "Samuel", "Katrine", "Tala"]
