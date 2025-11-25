// import "./styles.scss";

let savedName = "";
let myTodos = [];

function getReply(command) {
  let text = command.toLowerCase();

  if (text.includes("hello my name is")) {
    let parts = command.split(" is ");
    savedName = parts[1];
    return "Nice to meet you " + savedName;
  }

  if (text.includes("what is my name")) {
    if (savedName === "") {
      return "I don't know your name yet";
    }
    return "Your name is " + savedName;
  }

  if (text.includes("add") && text.includes("to my todo")) {
    let task = command.replace("Add ", "").replace(" to my todo", "");
    myTodos.push(task);
    return task + " added to your todo";
  }

  if (text.includes("remove") && text.includes("from my todo")) {
    let task = command.replace("Remove ", "").replace(" from my todo", "");

    let index = myTodos.indexOf(task);

    if (index !== -1) {
      myTodos.splice(index, 1);
      return "Removed " + task + " from your todo";
    } else {
      return "I could not find that item";
    }
  }

  if (text.includes("what is on my todo")) {
    if (myTodos.length === 0) {
      return "You have no todos";
    }
    return "You have " + myTodos.length + " todos: " + myTodos.join(" and ");
  }

  if (text.includes("what day is it today")) {
    let today = new Date();
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = today.getDate();
    let monthIndex = today.getMonth();
    let year = today.getFullYear();

    return day + ". of " + monthNames[monthIndex] + " " + year;
  }

  if (text.startsWith("what is") && text.includes("+")) {
    let parts = text.split(" ");
    let number1 = Number(parts[2]);
    let number2 = Number(parts[4]);
    let result = number1 + number2;
    return result;
  }

  if (text.startsWith("what is") && text.includes("*")) {
    let parts = text.split(" ");
    let number1 = Number(parts[2]);
    let number2 = Number(parts[4]);
    let result = number1 * number2;
    return result;
  }

  if (text.includes("set a timer for")) {
    let parts = text.split(" ");
    let minutes = Number(parts[4]);

    let timeToWait = minutes * 60 * 1000;

    setTimeout(function () {
      console.log("Timer done!");
      alert("Timer done!");
    }, timeToWait);

    return "Timer set for " + minutes + " minutes";
  }

  if (text.includes("make background red")) {
    document.body.style.backgroundColor = "red";
    return "I have changed the background to red";
  }

  return "I did not understand that";
}

console.log(getReply("Hello my name is Arman")); // "Nice to meet you Arman"
console.log(getReply("What is my name?")); // "Your name is Arman"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"

//FROM CODESANDBOX FORK

// Or if installed from NPM to use with a bundler
// import Artyom from "artyom.js";
// // const artyom = require("artyom.js");
// const artyom = new Artyom();

// function isgetReplyAvailable() {
//   return typeof getReply !== "undefined" && typeof getReply === "function";
// }

// if (isgetReplyAvailable()) {
//   let command;
//   let timeoutId;
//   let setIntervalTimer;

//   const button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     button.innerHTML = "Talk now 🙂";
//     setIntervalTimer = setInterval(() => {
//       const randomNumber = Math.floor(Math.random() * 6) + 2;
//       if (randomNumber % 2 === 0) {
//         button.innerHTML = "Talk now 😮";
//       } else {
//         button.innerHTML = "Talk now 🙂";
//       }
//     }, 100);
//     clearTimeout(timeoutId);

//     command = "";
//     timeoutId = setTimeout(() => {
//       clearInterval(setIntervalTimer);
//       const response = getReply(command);

//       artyom.say(response);

//       button.innerHTML = "Give a new command";
//     }, 5000);
//   });

//   var UserDictation = artyom.newDictation({
//     continuous: false, // Enable continuous if HTTPS connection
//     onResult: function (text) {
//       // Do something with the text
//       if (text.length > command.length) {
//         command = text;
//         console.log(command);
//       }
//     },
//     onStart: function () {
//       console.log("Dictations started by the users");
//     },
//     onEnd: function () {
//       console.log("Dictation stopped by the user");
//     },
//   });

//   UserDictation.start();
// } else {
//   alert("add the getReply function!");
// }
