/** @format */

// Voice Assistant implementation

let todos = [];
let userName = "";

// Load todos from localStorage on startup
function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
  }
}

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Speak response aloud
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function getReply(command) {
  command = command.trim().toLowerCase();

  // Greeting and name
  if (command.startsWith("hello my name is")) {
    userName = command.split(" ").pop();
    const reply = `Nice to meet you ${userName}`;
    console.log(reply);
    speak(reply);
    return reply;
  }

  if (command === "what is my name" || command === "what is my name?") {
    const reply = userName
      ? `Your name is ${userName}`
      : "I don't know your name yet.";
    console.log(reply);
    speak(reply);
    return reply;
  }

  // Todo management
  if (command.startsWith("add ")) {
    const item = command.replace("add ", "").replace(" to my todo", "");
    todos.push(item);
    saveTodos();
    const reply = `${item} added to your todo`;
    console.log(reply);
    speak(reply);
    return reply;
  }

  if (command.startsWith("remove ")) {
    const item = command.replace("remove ", "").replace(" from my todo", "");
    todos = todos.filter((t) => t !== item);
    saveTodos();
    const reply = `${item} removed from your todo`;
    console.log(reply);
    speak(reply);
    return reply;
  }

  if (command === "what is on my todo" || command === "what is on my todo?") {
    const reply = todos.length
      ? `You have ${todos.length} todos: ${todos.join(", ")}`
      : "Your todo list is empty";
    console.log(reply);
    speak(reply);
    return reply;
  }

  // Date information
  if (command.includes("date today")) {
    const reply = `Today is ${new Date().toLocaleDateString("en-GB")}`;
    console.log(reply);
    speak(reply);
    return reply;
  }

  // math calculation
  if (command.startsWith("what is")) {
    const expr = command.replace("what is", "").replace("?", "").trim();
    try {
      const result = Function(`return ${expr}`)();
      const reply = `${expr} is ${result}`;
      console.log(reply);
      speak(reply);
      return reply;
    } catch {
      const reply = "Sorry, I can't compute that.";
      console.log(reply);
      speak(reply);
      return reply;
    }
  }

  // Timer setting
  if (command.startsWith("set a timer for")) {
    const minutes = parseInt(command.match(/\d+/)[0], 10);
    const reply = `Timer set for ${minutes} minutes`;
    console.log(reply);
    speak(reply);
    return reply;
  }

  // weather information
  if (command.includes("weather today")) {
    const reply = "The weather is sunny with a high of 4°C";
    console.log(reply);
    speak(reply);
    return reply;
  }

  const reply = "I don't understand that command. Please try again.";
  console.log(reply);
  speak(reply);
  return reply;
}

// Text command input handler
function handleTextCommand() {
  const input = document.getElementById("commandInput").value;
  const reply = getReply(input);
  document.getElementById("response").innerText = reply;
}

// speech command input handler
function startListening() {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "en-GB";
  recognition.start();

  recognition.onresult = function (event) {
    const spokenCommand = event.results[0][0].transcript;
    const reply = getReply(spokenCommand);
    document.getElementById("response").innerText = reply;
  };
}

// Initialize todos on page load
loadTodos();
