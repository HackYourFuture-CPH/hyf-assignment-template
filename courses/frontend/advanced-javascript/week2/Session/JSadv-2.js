// // function greeting(name, callback) {
// //          return callback(name);
// //     }

// // function callback(name) {
// //     if (name === "Tom") {
// //         console.log(`Hi, ${name}!`)
// //     }else console.log(`Good morning, ${name}! `)
// // }
// // callback("Jack", callback)
// // callback("Tom", callback)

// function greeting(name, callback) {
//          return callback(name);
// }
    
// const formal = (name) => `Good morning, ${name}!`
// const casual = (name) => `Hi, ${name}!`

// function greeting(name, callback) {
//     return callback(name);
// }
// console.log(
//     greeting("Jack", formal)
// );
// console.log(
//     greeting("Tom", casual)
// );



// const array = [1, 2, 3, 4, 5];
// const newArray = [];
// const multiply = (num, factor) => {
//     newArray.push(num * factor);
// };

// const callbackFactory = function (factor) {
//     //
//     return multiply;
// }


// const callback = callbackFactory(2);

// array.forEach(callback);
// console.log(typeof callbackFactory);
// console.log(typeof callbackFactory());
// console.log(typeof multiply());
// console.log(newArray);
// console.log(array);

//setTimeout(callback, 1000);
const bar = () => console.log("First");
const foo = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();


// synchronous vs asynchronous




// const data = document.querySelector(".data");
// const btn = document.querySelector(".btn");

// data.innerText = "Loading...";

// btn.addEventListener("click", () => {
//     data.innerText = "Loading...";
//     setTimeout(() => {
//         data.innerText = "Data loaded!";
//     }, 2000);
// });
// btn.addEventListener btn.addEventListener("click", () => {
   // console.log("clicked");
//});




//Exercises
//1.  Click counter
const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");

const counterDisplay = document.querySelector("#counter");

let counter = 0;

button1.addEventListener("click", function () {
  counterDisplay.innerText = counter;
  counter++;
});

button2.addEventListener("click", function () {
  counterDisplay.innerText = counter;
  counter++;
});


// #2 Delay clicker


const btn = document.querySelector("#btn-load-3");
const data = document.querySelector(".data");

btn.addEventListener("click", () => {
       setTimeout(() => {
        data.innerText = "This text was delayed by 3 seconds"
    }, 3000);   
});
btn.addEventListener("click", () => {
    console.log("clicked");
});


//#3. Page onload


const domLoaded = () => {
  console.log("DOM fully loaded and parsed");
};

document.addEventListener("DOMContentLoaded", domLoaded);


//#4  Mouse position

    
    
    function mousemove(e) {
    let x = document.getElementById('x');
        let y = document.getElementById('y');
        x.innerHTML = e.clientX;
        y.innerHTML = e.clientY;
};


document.onmousemove = mousemove;



//#5. Mouse position online tool


let totalX = 0;
let totalY = 0;
let moveCount = 0;

const trackMouse = (e) => {
  totalX += e.clientX;
  totalY += e.clientY;
  moveCount++;
};

document.addEventListener("mousemove", trackMouse);
    
setTimeout(() => {
  if (moveCount > 0) {
    const avgX = Math.round(totalX / moveCount);
    const avgY = Math.round(totalY / moveCount);

     document.querySelector(".average-mouse-position").innerText =
      `Average mouse position: x=${avgX}, y=${avgY}`;
  }
}, 30000);