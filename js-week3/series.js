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
function logOutSeriesText() {
  // write code here
  const lifeSpanYears=80;
  const lifeSpanHours=lifeSpanYears*365*24;
  let totalPercentage=0;
  for(let i=0; i<seriesDurations.length; i++){
    const series=seriesDurations[i];
    // convert series durations to hours
    const seriesHours=series.days*24+series.hours+series.minutes/60;
    //calculate percentage
    const percentage=(seriesHours/lifeSpanHours)*100;
    totalPercentage+=percentage;
  

console.log(series.title + " took "+percentage.toFixed(3) +"% of my life");
}
console.log("In total that is " +  totalPercentage.toFixed(3) +  "% of my life");

}
logOutSeriesText();