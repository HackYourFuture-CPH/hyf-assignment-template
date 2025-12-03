import "./styles.scss";

// Or if installed from NPM to use with a bundler
import Artyom from "artyom.js";
const artyom = require("artyom.js");
const artyom = new Artyom();

let userName = "";
let todos = [];

function getReply(command) {
    command = command.toLowerCase()

    if (command.startsWith("hello my name is")) {
    const name = command.replace("hello my name is", "").trim();
    if (userName === name) {
      return "You already told me your name is " + name;
    } else if (userName) {
      return "You already told me your name is " + userName;
    } else userName = name;
    return "Nice to meet you " + name;
  }

  if (command === "what is my name?" || command === "what is my name") {
    if (!userName) {
      return "I don't know your name yet";
    } 
    return "Your name is " + userName;
  }

  if (command.startsWith("add ") && command.endsWith(" to my todo")) {
    const item = command.replace("add", "").replace("to my todo", "").trim();
    todos.push(item);
    return item + " added to your todo";
  }

  if (command.startsWith("remove ") && command.endsWith(" from my todo")) {
    const item = command.replace("remove", "").replace("from my todo", "").trim();
    const index = todos.indexOf(item);
    if (index === -1) {
      return item + " is not in your todo";
    }
    todos.splice(index, 1);
    return "Removed " + item + " from your todo";
  }

  if (command === "what is on my todo?" || command === "what is on my todo") {
    if (todos.length === 0) {
      return "Your todo list is empty";
    }
    return "You have " + todos.length + " todos - " + todos.join(" and ");
  }

  if (command === "what day is it today?" || command === "what day is it today") {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("en-us", { month: "long" });
    const year = date.getFullYear();
    return day + ". of " + month + " " + year;
  }

  if (command.startsWith("what is")) {
    const expression = command.replace("what is", "").trim();
    try {
      const result = eval(expression);
      return "" + result;
    } catch {
      return "I cannot calculate that";
    }
  }

  if (command.startsWith("set a timer for")) {
    const parts = command.split(" ");
    const minutes = Number(parts[4]);
    setTimeout(function() {
      artyom.say("Timer done");
    }, minutes * 60000);
    return "Timer set for " + minutes + " minutes";
  }

  return "I don't understand the command";

}

function isgetReplyAvailable() {
  return typeof getReply !== "undefined" && typeof getReply === "function";
}

if (isgetReplyAvailable()) {
  let command;
  let timeoutId;
  let setIntervalTimer;

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.innerHTML = "Talk now 🙂";
    setIntervalTimer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 2;
      if (randomNumber % 2 === 0) {
        button.innerHTML = "Talk now 😮";
      } else {
        button.innerHTML = "Talk now 🙂";
      }
    }, 100);
    clearTimeout(timeoutId);

    command = "";
    timeoutId = setTimeout(() => {
      clearInterval(setIntervalTimer);
      const response = getReply(command);

      artyom.say(response);

      button.innerHTML = "Give a new command";
    }, 5000);
  });

  var UserDictation = artyom.newDictation({
    continuous: false, // Enable continuous if HTTPS connection
    onResult: function(text) {
      // Do something with the text
      if (text.length > command.length) {
        command = text;
        console.log(command);
      }
    },
    onStart: function() {
      console.log("Dictations started by the users");
    },
    onEnd: function() {
      console.log("Dictation stopped by the user");
    }
  });

  UserDictation.start();
} else {
  alert("add the getReply function!");
}

