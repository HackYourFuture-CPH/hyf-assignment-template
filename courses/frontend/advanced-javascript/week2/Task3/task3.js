// Create an array with 3 items.
// All items should be functions.
//  Iterate through the array and call all the functions.
let functions = [
  function add(a, b) {
    return a + b;
  },
  function multiply(a, b) {
    return a * b;
  },
  function divide(a, b) {
    return a / b;
  },
];

for (let i = 0; i < functions.length; i++) {
  console.log(functions[i](10, 5));
}
console.log(functions);

console.log(functions[0](10, 5)); // Output: 15
console.log(functions[1](10, 5)); // Output: 50
console.log(functions[2](10, 5)); // Output: 2

//Create a function as a const and try creating a function normally.
// Call both functions.

const sumFunction = function sum(a, b) {
  return a + b;
};
console.log(sumFunction(10, 5)); // Output: 15

// Create an object that has a key whose value is a function.
// Try calling this function.
let obj = {
  multiplication: function multiply(a, b) {
    return a * b;
  },
};
console.log(obj.multiplication(10, 5)); // Output: 50
