// Item array removal
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

const nameToRemove =" Ahmad ";
  const index =names.indexOf(nameToRemove);
 if(index !== -1){
    names.splice(index,1);
 }

console.log(names);

// ['Peter', 'Yana', 'kristina', 
// 'Rasmus', 'Samuel', 'Katrine', 'Tala']
