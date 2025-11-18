const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysLeft) {
  const today = new Date().getDay();
  return week[(today + daysLeft) % week.length];
}

console.log(getEventWeekday(25));

console.log(getEventWeekday(2));
