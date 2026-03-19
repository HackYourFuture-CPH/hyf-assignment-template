//Array of functions
const myFunctions = [
  function () {
    console.log("Hello!");
  },
  function () {
    console.log(2 + 3);
  },
  function () {
    console.log("This is the third function!");
  },
];

// Function declaration and a function expression
function sayHello() {
  console.log("Hello from a normal function!");
}

sayHello();

const sayHi = function () {
  console.log("Hello from a function expression!");
};

sayHi();


//Object with function
const myObject = {
    greet: function() {
        console.log("Hello I m here!");
    }
};


myObject.greet();
