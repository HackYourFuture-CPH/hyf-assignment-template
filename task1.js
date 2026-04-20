//#1 Item array removal

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

const nameToRemove = names.indexOf("Ahmad");
names.splice(nameToRemove, 1);

console.log(names);