const state = { name: null, todos: [] };

function getReply(command) {
  if (typeof command !== "string") return "I didn't understand that.";
  const s = command;

  let m = s.match(/^hello my name is (.+)$/i);
  if (m) {
    const name = m[1];
    if (!state.name) {
      state.name = name;
      return `Nice to meet you ${name}`;
    }
    if (state.name.toLowerCase() === name.toLowerCase()) {
      return `I already know your name is ${state.name}`;
    }
    const old = state.name;
    state.name = name;
    return `Okay - I'll call you ${name}(was ${old})`;
  }
  if (/what is my name\??/i.test(s)) {
    return state.name
      ? `Your name is ${state.name}`
      : "I don't know your name yet.";
  }
  m = s.match(/^add (.+)to my todo$/i);

  if (m) {
    const item = m[1];
    state.todos.push(item);
    return `${item} added to your todo`;
  }
  m = s.match(/^remove (.+) from my todo$/i);
  if (m) {
    const item = m[1];
    const i = state.todos.findIndex(
      (t) => t.toLowerCase() === item.toLowerCase()
    );
    if (i === -1) return `${item} is not in your todo`;
    state.todos.splice(i, 1);
    return `Removed ${item} from your todo`;
  }
  if (/what is on my todo\??/i.test(s)) {
    if (state.todos.length === 0) return "You have no todos.";
    return `You have ${state.todos.length} todo${
      state.todos.length === 1 ? "" : "s"
    }: ${state.todos.join(", ")}`;
  }
  if (/how many todos do i have\??/i.test(s)) {
    const n = state.todos.length;
    return `You have ${n} todo${n === 1 ? "" : "s"}.`;
  }
  if (/what day is it today \??/i.test(s)) {
    const d = new Date();
    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();
    return `${day}. of ${month} ${year}`;
  }
  m = s.match(/(-?\d+)\s*([\+\-\*\/])\s*(-?\d+)/);
  if (m) {
    const a = Number(m[1]),
      op = m[2],
      b = Number(m[3]);
    if (op === "+") return String(a + b);
    if (op === "-") return String(a - b);
    if (op === "*") return String(a * b);
    if (op === "/") return b === 0 ? "Error: division by zero" : String(a / b);
  }
  m = s.match(/^set a timer for (\d+)\s*minutes?$/i);
  if (m) {
    const mins = Number(m[1]);
    setTimeout(() => console.log("Timer done"), mins * 60 * 1000);
    return `Timer set for ${mins} minutes`;
  }
  return "Sorry ,I don't know how to help with that.";
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add Dancing to my todo"));
console.log(getReply("Add singing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("How many todos do I have?"));
console.log(getReply("Remove Dancing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 0 minutes"));
console.log(getReply("Add  buy milk to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove Dancing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What is 5 + 4?"));
