function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  return weekdays[(today + daysFromToday) % 7];
}

const eventDay = getEventWeekday(5);
console.log(eventDay);
