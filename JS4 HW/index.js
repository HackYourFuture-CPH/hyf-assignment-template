const userName = "";

const todoList = [];

function getReply(command = "") {

    if (command.toLowerCase().includes("hello my name is")) {
        const userName = command.split(" ").pop();
        return `Nice to meet you ${userName} `;
    }

    if (command.toLowerCase().includes("what is my name?")) {
            if (userName != "") {
                return (`Your name is ${userName}`)
            } else { 
                return ("Please, introduce yourself")
            };
    }

    if ((command.toLowerCase().includes("todo")) &&
        command.toLowerCase().includes("add")) {
        const task = (command.substring("add ".length, command.length - " to my todo".length));
        todoList.push(task);
        return  `${task} added to your todo`;
    }
    
    if (command.toLowerCase().includes("what is on my todo")) {
        return todoList;
    }
    
     if ((command.toLowerCase().includes("todo")) &&
         (command.toLowerCase().includes("remove"))) {
        const taskToRemove = command.substring("remove ".length, command.length - " from my todo".length);
        if (todoList.includes(taskToRemove)) {
            return "Removed " + todoList.splice(todoList.indexOf(taskToRemove), 1) + " from your todo";
        } else { 
            return "There is no such activity in todo."+ (todoList.indexOf(taskToRemove));   
        }
    }  

    if ((command.includes("+")) ||
        (command.includes("-")) ||
        (command.includes("*")) ||
        (command.includes("/"))) {
        const mathExpression = command.split(" ");

        if (mathExpression.length !== 3) {
            return "Invalid math expression";
        }
        const a = Number(mathExpression[0]);
        const operator = mathExpression[1];
        const b = Number(mathExpression[2]);

        if (Number.isNaN(a) && Number.isNaN(b)) {
            return "Invalid numbers in expression";
        } 
        switch (operator) {
            case "+":
                return a + b;
                break;

            case "-":
                return a - b;
                break;
        
            case "/":
                if (b === 0) {
                    return "Division by zero is not allowed";
                }
                return a / b;
                break;
                
            case "*":
                return a * b;
        }
    }

    if (command.toLowerCase().includes("what day is it today")) {
        //respond with the date in a human readable format. ;
        const date = new Date();
        return date.getDate()+ " of " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
    }

    if (command.toLowerCase().includes("set a timer for")) {
        const timeString = command.substring("set a timer for ".length, command.length - " minutes".length);
        const time = Number(timeString);
        return `Timer set for ${time} minutes`;
    }

    return ("Sorry, command is not recognized.");
}
    
console.log("What is my name?");
console.log(getReply("What is my name?"));
console.log("Hello my name is Benjamin");
console.log(getReply("Hello my name is Benjamin"));
console.log("What is my name?")
console.log(getReply("What is my name?"));
console.log("Add fishing to my todo");
console.log(getReply("Add fishing to my todo"));
console.log("Add singing in the shower to my todo");
console.log(getReply("Add singing in the shower to my todo"));
console.log("Add shopping to my todo");
console.log(getReply("Add shopping to my todo"));
console.log("What is on my todo?");
console.log(getReply("What is on my todo?"));
console.log("Remove fishing from my todo");
console.log(getReply("Remove fishing from my todo"));
console.log("Remove singing in the shower from my todo");
console.log(getReply("Remove singing in the shower from my todo"));
console.log("What is on my todo?");
console.log(getReply("What is on my todo?"));
console.log("What day is it today?");
console.log(getReply("What day is it today?"));
console.log("Set a timer for 5 minutes");
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply());
console.log("3 + 3");
console.log(getReply("3 + 3"));