const names = ["Peter",  "Ahmad",  "Yana",  "kristina",  "Rasmus",  "Samuel",  "Katrine",  "Tala",];
const nameToRemove = "Ahmad";
// Write some code here
for(let i=names.length-1; i>=0; i--){
    if(names[i] === nameToRemove){
        names.splice(i,1);
    }
}
// Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']