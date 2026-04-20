// Event application
const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function getEventDay(daysTillEvent) {
    const today = new Date().getDay();  

    return dayName[(today+daysTillEvent)%7];
}
console.log(getEventDay(1));
console.log(getEventDay(3));