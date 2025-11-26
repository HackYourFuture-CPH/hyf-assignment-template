const userName = [];
const todos = [];

function getReply(command) {
  const lower = command.toLowerCase();

  //My name is
  if (lower.includes("my name is")) {
    const nameStart = lower.indexOf("my name is") + "my name is".length;

    const extractedName = lower.slice(nameStart).trim();

    if (!userName.includes(extractedName)) {
      userName.push(extractedName);
      return `Nice to meet you ${extractedName}`;
    } else {
      return `You already introduce yourself as ${extractedName}`;
    }
  }
  //What is my name
  if (lower.includes("what is my name")) {
    if (userName.length === 0) {
      return `You haven’t told me your name yet`;
    } else {
      const userNameLastUsed = userName[userName.length - 1];

      return `Your name is ${userNameLastUsed}`;
    }
  }

   //todo
  if (lower.includes("add") && lower.includes("to my todo")) {
    const itemStart = lower.indexOf("add") + "add".length;
    const itemEnd = lower.indexOf("to my todo");
    const extractValue = lower.slice(itemStart, itemEnd).trim();
    todos.push(extractValue);

    return `${extractValue} added to your todo`;
  }

}

//My name is - Check Output

console.log(getReply("My name is Benjamin"));
console.log(getReply("My name is Benjamin"));
console.log(getReply("My name is Abi"));
console.log(getReply("My name is Abi"));
console.log(getReply("My name is Gayu"));
console.log(getReply("My name is Benjamin"));

//What is my name - Check Output

console.log(getReply("What is my name?"));

//Add to Todo - Check Output

console.log(getReply("Add fishing to my todo"));

console.log(getReply("Add singing to my todo"));

console.log(getReply("Add singing in the shower to my todo"));

