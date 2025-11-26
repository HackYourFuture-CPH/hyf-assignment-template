     
function getReply(command) {
  switch (command.toLowerCase()) {
    case "hello my name is benjamin":
      return "nice to meet you Benjamin";

    case "what is my name":
    return "Your name is Benjamin";
 
    case "add fishing to my todo":
      return "Fishing added to your todo";

    case "add singing in the shower to my todo":
      return "Singing in the shower added to your todo";

    case "what is on my todo":
      return "You have 2 todos - fishing, singing in the shower";

    case "what day is it today?":
      return (
        "Today is " +
        new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
      );

    case "what is 3 plus 3":
      return "3 plus 3 is 6";

    case "what is 4 * 12":
      return "4 multiplied by 12 is 48";

    case "set a timer for 4 minutes":
      
      setTimeout(() => {
        console.log("⏰ Timer done! 4 minutes have passed.");
      }, 4 * 60 * 1000);

      return "Timer set for 4 minutes";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("Set a timer for 4 minutes"));
