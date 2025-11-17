const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
let daysToHours=3*24;
console.log("Days into hours: ",daysToHours);

let addExistingHours=1;

let convertMinutesToHours=20/60;
console.log("Convert Minutes to Hours: ",convertMinutesToHours);

let total=daysToHours+addExistingHours+convertMinutesToHours;
console.log("Total: ",total);

let totAvgLifeSpanInYears=80*365*24;
let percentage=(total/totAvgLifeSpanInYears)*100;
let fixedPErcentage=percentage.toFixed(2)+"%";

console.log(fixedPErcentage);

/*function logOutSeriesText() {
 for(let i=0;i<=seriesDurations.length;i++){
    if(!seriesDurations[i]){
     return `The series is not in the list `
    }
    else{
        return ;
    }
 }
}
*/