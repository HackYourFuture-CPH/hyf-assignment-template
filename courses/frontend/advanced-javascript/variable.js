

const myFunction = [()=> console.log("Function 1"), 
                    ()=> console.log("Function 2"),
                    ()=> console.log("Function 3")];

   myFunction.forEach(fn=> fn());
   
   //function expression
   const greeting = function () {
    console.log("Hello!");
   }

   //function declaration
   function sayHello(){
    console.log("Hello!")
   }
   greeting();
   sayHello();

   const person = {
    name:"John",
    greet () {
        console.log(`Hello, my name is ${this.name}`);
    }
   };

   person.greet();