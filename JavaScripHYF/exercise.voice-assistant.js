
let userName = null;
let todos = [];

function getReply(command) {
  console.log("Command received: ", command);

  if (command.includes("hello my name is")) {
    let words = command.split(" ");
    let nameIndex = words.length - 1;
    let name = words[nameIndex];

    if (userName == name) {
      return "Hi again " + userName;
    }

    userName = name;
    return "Nice to meet you " + userName;
  }

  if (command.includes("what is my name")) {
    if (userName) {
      return userName;
    } else {
      return "I don't know your name";
    }
  }

  if (command.includes("to my to do")) {
    let todo = command.slice(4, -11)
    todos.push(todo);
    return `${todo} added to your todo`;
  }

  if (command.includes("from my todo")) {
    let todo = command.slice(7, -1313);
    let indexOfTodo = todos.indexOf(todo);
    if (indexOfTodo !== -1) {
      todos.splice(indexOfTodo, 1);
    }

    return `Removed ${todo} from your todo`;
  }

  if (command.includes("what is on my to do")) {
    let numberOfItems = todos.length;
    let responseSentence = `you have ${numberOfItems} todos - `;

    for (let i = 0; i < todos.length; i++) {
      if (todos.length > 1) {
        responseSentence += `${todos[i]}, `;
      } else {
        responseSentence += `${todos[i]} `;
      }
    }
    return responseSentence;
  }

  if (command.includes("what day is it today")) {
    const date = new Date();
    let day = date.getDate();

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

    let month = monthNames[date.getMonth()];

    let year = date.getFullYear();

    return `${day} of ${month} ${year}`;
  }

  if (command.includes("what is ")) {
    let fullOperationSentence = command.slice(8);
    let partsOfSentence = fullOperationSentence.split(" ");

    let operatorSymbol = partsOfSentence[1];
    let number1 = parseInt(partsOfSentence[0]);
    let number2 = parseInt(partsOfSentence[2]);

    let result;

    switch (operatorSymbol) {
      case "+":
        result = number1 + number2;
        break;

      case "-":
        result = number1 - number2;
        break;

      case "*":
        result = number1 * number2;
        break;

      case "/":
        result = number1 / number2;
        break;

      default:
        break;
    }

    return result;
  }

  if (command.includes("set a timer for")) {
    let timerSentence = command.slice(16);
    let partsOfSentence = timerSentence.split(" ");
    let number = parseInt(partsOfSentence[0]);
    let duration = partsOfSentence[1]; // seconds, minutes, hours

    let timerInMilliSeconds;

    switch (duration) {
      case "seconds":
        timerInMilliSeconds = number * 1000;
        break;

      case "minutes":
        timerInMilliSeconds = number * 1000 * 60;
        break;

      case "hours":
        timerInMilliSeconds = number * 1000 * 60 * 60;
        break;

      default:
        break;
    }


    function timerFunction() {
      artyom.say("Timer Done");
    }

    setTimeout(timerFunction, timerInMilliSeconds);

    return `Timer set for ${number} ${duration}`;
  }

  return "I didn't understand that command";
}

// getReply("hello my name is Monika");
// getReply("hello my name is Monika");
// getReply("hello my name is Benjamin");

// getReply("what is my name");

// getReply("add fishing to my todo");
// getReply("add singing in the shower to my todo");
// getReply("add boating to my todo");
// getReply("add watching TV to my todo");

// getReply("remove fishing from my todo");

// getReply("what is on my todo");

// getReply("what day is it today");

// getReply("what is 3 + 3");
// getReply("what is 4 * 12");

// getReply("set a timer for 5 seconds")