function getEventWeekday(numberOfDaysInTheFuture) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const today = new Date();
  const todayIndex = today.getDay(); 
  
  const eventDayIndex = (todayIndex + numberOfDaysInTheFuture) % 7;
  const todayName = days[todayIndex];
  const eventDayName = days[eventDayIndex];
  
  return `Today is ${todayName}. The event is in ${numberOfDaysInTheFuture} days, so it will be on ${eventDayName}.`;
}

console.log(getEventWeekday(3));
