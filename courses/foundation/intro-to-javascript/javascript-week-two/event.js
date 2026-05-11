

function getEventWeekday(daysFromToday) {

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const today = new Date(); // Get today's full date
  
  const todayIndex = today.getDay();   // Get today's weekday index (0 = Sunday, 6 = Saturday)
  
  const eventIndex = (todayIndex + daysFromToday) % 7;   // Add days and wrap around using % 7
  
  return weekdays[eventIndex];    // Return the name of the event weekday
}


console.log(getEventWeekday(2));
console.log(getEventWeekday(9));



