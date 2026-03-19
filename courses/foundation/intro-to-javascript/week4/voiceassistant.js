let userName = "";
let todos = [];
function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    userName = command.replace("Hello my name is", "").trim();
    return "Nice to meet you " + userName;
  }
  if (command === "What is my name?") {
    if (userName === "") {
      return "I don't know your name yet.";
    }
    return "Your name is " + userName;
  }
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const item = command.replace("Add ", "").replace(" to my todo", "").trim();
    todos.push(item);
    return item + " added to your todo";
  }
  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const item = command
      .replace("Remove ", "")
      .replace(" from my todo", "")
      .trim();
    const index = todos.indexOf(item);
    if (index !== -1) {
      todos.splice(index, 1);
      return "Removed " + item + " from your todo";
    }
    return item + " is not in your todo";
  }
  if (command === "What is on my todo?") {
    if (todos.length === 0) {
      return "Your todo list is empty.";
    }
    return "You have " + todos.length + " todos - " + todos.join(" and ");
  }
  if (command === "What day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
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
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    return day + ". of " + month + " " + year;
  }
  if (command.startsWith("What is")) {
    const question = command.replace("What is", "").replace("?", "").trim();
    const parts = question.split(" ");
    const a = Number(parts[0]);
    const operator = parts[1];
    const b = Number(parts[2]);
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
    return "I cannot calculate that.";
  }
  if (command.startsWith("Set a timer for")) {
    const minutes = parseInt(
      command.replace("Set a timer for", "").replace("minutes", "").trim()
    );
    setTimeout(function () {
      console.log("Timer done");
    }, minutes * 60 * 1000);
    return "Timer set for " + minutes + " minutes";
  }
  return "I don't understand that command.";
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("What is 10 - 4?"));
