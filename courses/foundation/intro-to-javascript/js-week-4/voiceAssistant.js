const command = "Hello my name is Oumaima";
let savedName = "";
const toDo = [];

function getReply(command) {
  command = command.trim();
  if (command.startsWith("Hello my name is")) {
    savedName = command.slice(17).trim();
    return "Nice to meet you " + savedName;
  } else if ((command === "What is my name?")) {
    if (savedName === "") {
      return "Sorry, I don't know your name yet";
    } else return "Hello, Your name is " + savedName;
  } else if ((command = "Add fishing to my todo")) {
    toDo.push("fishing");
    return "fishing added to your todo list";
  } else if (command === "Add singing in the shower to my todo") {
    toDo.push("singing in the shower");
    return "Singing in the shower is added to your todo list";
  } else if (command === "Remove fishing from my todo") {
    toDo.pop();
    console.log("Fishing is removed from your todo list");
  } else if (command === "What is on my todo?") {
    return "You have " + toDo.length + " todos";
    let toDoList = "";
    for (let i = 0; i < toDo.length; i++) {
      toDoList = toDoList + " and " + toDo[i];
    }
  } else if (command === "What day is it today?") {
    const today = new Date();

    const day = today.getDate();
    const year = today.getFullYear();

    const months = [
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

    const monthName = months[today.getMonth()];
    return day+". of "+monthName+" "+year;
  }

  else if(command.startsWith("Set a timer for"))
  {
    let minutes = parseInt(command.split(" ")[4]);
    let ms = minutes * 60 * 1000;

    setTimeout(function () {
      console.log("Timer done");
    }, ms);
  }

  else return "Sorry, I don't understand the command";
}

console.log(getReply(command));