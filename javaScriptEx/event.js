//Event application
function getEventWeekday(daysFromToday){ 
const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today= new Date();
const todayNumber = today.getDay();
const eventDayNumber=(todayNumber + daysFromToday)%7;
return days[eventDayNumber];

}
console.log("Event will be on:" +getEventWeekday(9));
console.log("Event will be on:" +getEventWeekday(1));
