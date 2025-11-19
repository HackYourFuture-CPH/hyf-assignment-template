//Series duration of my life
const seriesDurations = [
  {
    title: "MASABA MASABA",
    days: 2,
    hours: 1,
    minutes: 0,
  },{
    title: "DABBA CARTEL",
    days: 1,
    hours: 14,
    minutes: 0,
  },
  {
    title: "LITTLE THINGS",
    days: 4,
    hours: 12,
    minutes: 0,
  },
  
];
function logOutSeriesText() {
    let totalPercent = 0;
    for (const obj of seriesDurations ){
  const totalMinInSeries =((obj.days*24)*60+obj.hours*60+obj.minutes);
    
    const lifeMinTotal =80*365.25*24*60;
const calPercent =((totalMinInSeries/lifeMinTotal)*100);
console.log(`${obj.title} took ${calPercent.toFixed(3)}%of my life`);
totalPercent += calPercent;
}

console.log(`In total that is ${totalPercent.toFixed(3)}% of my life`);
}
(logOutSeriesText(seriesDurations));