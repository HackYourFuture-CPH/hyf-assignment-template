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

}

//My name is - Check Output

console.log(getReply("My name is Benjamin"));
console.log(getReply("My name is Benjamin"));
console.log(getReply("My name is Abi"));
console.log(getReply("My name is Abi"));
console.log(getReply("My name is Gayu"));
console.log(getReply("My name is Benjamin"));

