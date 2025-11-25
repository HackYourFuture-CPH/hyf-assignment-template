let ownerName;
const todos = [];
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

function getReply(command) {
  switch (command) {
    case "Hello my name is Benjamin":
      let words = command.split(" ");
      ownerName = words[words.length - 1];
      return `nice to meet you ${ownerName}`;
    case "What is my name?":
      return ownerName
        ? `your name is ${ownerName}`
        : "I don't know your name yet";
    case command.match(/^Add (.*) to my todo$/)?.input:
      const todo = command.match(/^Add (.*) to my todo$/)[1];
      todos.push(todo);
      return `${todo} added to your todo`;
    case command.match(/^Remove (.*) from my todo$/)?.input:
      const todoToRemove = command.match(/^Remove (.*) from my todo$/)[1];
      todos = todos.filter((item) => item !== todoToRemove);
      return `Remove ${todoToRemove} from my todo`;
    case "What is on my todo?":
      if (todos.length === 0) {
        return `No todos on the list`;
      }
      return `You have ${todos.length} todos: ${todos.join(", ")}`;
    case "What day is it today?":
      const today = new Date();

      const day = today.getDate();
      const year = today.getFullYear();
      const month = monthNames[today.getMonth()];
      return `${day} of ${month} ${year}`;
    case command.match(/^What is (\d+) ([+\-*/]) (\d+)$/)?.input: {
      const [, num1, operator, num2] = command.match(
        /^What is (\d+) ([+\-*/]) (\d+)$/
      );
      const first = Number(num1);
      const second = Number(num2);

      let result;

      switch (operator) {
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
        case "*":
          result = first * second;
          break;
        case "/":
          result = first / second;
          break;
      }
      return result;
    }
    case command.match(/^Set a timer for (\d+) minutes$/i)?.input: {
      const match = command.match(/^Set a timer for (\d+) minutes$/i);
      const minutes = match[1];
      const timer = Number(minutes) * 60 * 1000;
      setTimeout(() => console.log("Timer done"), timer);
      return `Timer set for ${minutes} minutes`;
    }
    case "What time is it?":
      const fullDate = new Date();
      return `It's ${fullDate.toLocaleTimeString("da-DK", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    default:
      return "Unknown command";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 4 * 4"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("What time is it?"));
