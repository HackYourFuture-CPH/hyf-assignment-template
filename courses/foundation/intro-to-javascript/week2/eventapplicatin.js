function getEventWeekday(daysFromToday) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const todayNumber = today.getDay();
  const eventDayNumber = (todayNumber + daysFromToday) % 7;
  console.log("Today is " + weekDays[todayNumber]);
  console.log("Your event is in " + daysFromToday + " days.");
  console.log("The event will be on a " + weekDays[eventDayNumber] + ".");
}
getEventWeekday(10);
