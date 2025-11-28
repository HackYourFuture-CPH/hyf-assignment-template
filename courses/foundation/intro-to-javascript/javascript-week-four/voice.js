let userName = null;
const todos = [];

function setName(command) {
  const prefix = "Hello my name is ";
  const name = command.slice(prefix.length).trim();
  userName = name.charAt(0).toUpperCase() + name.slice(1);
  return `Nice to meet you ${userName}`;
}

function getName() {
  if (!userName) {
    return "I don't know your name yet.";
  }
  return `Your name is ${userName}`;
}

function addTodo(command) {
  const item = command.substring(4, command.indexOf(" to my todo")).trim();
  todos.push(item);
  return `${item} added to your todo`;
}

function removeTodo(command) {
  const item = command.substring(7, command.indexOf(" from my todo")).trim();
  const index = todos.indexOf(item);

  if (index === -1) return `${item} is not in your todo`;

  todos.splice(index, 1);
  return `Removed ${item} from your todo`;
}

function listTodos() {
  if (todos.length === 0) return "Your todo list is empty.";

  return `You have ${todos.length} todos - ${todos.join(", ")}`;
}

function getDate() {
  const date = new Date();
  return `${date.getDate()}. of ${date.toLocaleString("en-us", {
    month: "long",
  })} ${date.getFullYear()}`;
}

function doMath(command) {
  const expression = command.replace("what is", "").trim();
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    return "I can only calculate simple math expressions.";
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)(); 
    return result;
  } catch {
    return "I can't calculate that.";
  }
}

function setTimer(command) {
  const minutes = parseInt(command.match(/\d+/)[0]);
  setTimeout(() => console.log("⏰ Timer done!"), minutes * 60 * 1000);
  return `Timer set for ${minutes} minutes`;
}

function joke() {
  return "Why was the function sad? Because it didn’t get any arguments!";
}

function getReply(command) {
  const lower = command.toLowerCase();

  if (lower.startsWith("hello my name is")) return setName(command);
  if (lower === "what is my name") return getName();

  if (lower.includes("add") && lower.includes("to my todo"))
    return addTodo(command);
  if (lower.includes("remove") && lower.includes("from my todo"))
    return removeTodo(command);
  if (lower === "what is on my todo") return listTodos();

  if (lower === "what day is it today?") return getDate();

  if (lower.startsWith("what is")) return doMath(lower);

  if (lower.startsWith("set a timer for")) return setTimer(lower);

  if (lower === "tell me a joke") return joke();

  return "I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("Tell me a joke"));
