//#3 Series duration of my life

const seriesDurations = [
  {
    title: "Lost",
    days: 3,
    hours: 16,
    minutes: 30,
  },
  {
    title: "The Residence",
    days: 0,
    hours: 7,
    minutes: 44,
  },
  {
    title: "The The Queen's Gambit",
    days: 0,
    hours: 6,
    minutes: 32,
  },
];

//Calculate total series duration in minutes

let totalSeriesDurationInMinutes = 0;

for (const duration of seriesDurations) {
  totalSeriesDurationInMinutes +=
    duration.days * 24 * 60 + duration.hours * 60 + duration.minutes;
}

console.log(totalSeriesDurationInMinutes);

// Convert Life span into minutes

function convertLifeSpanYearsIntoMinutes(years) {
  return years * 525600; //1 year = 525600 minutes
}

//Ask for age
let lifeSpanInYears = prompt("How old are you?");
lifeSpanInYears = Number(lifeSpanInYears);

const lifeSpanInMinutes = convertLifeSpanYearsIntoMinutes(lifeSpanInYears);

//Calculate series duration as a percentage of life span
function seriesDurationsOutOfLifeSpan(seriesMinutes, lifeSpanMinutes) {
  return (seriesMinutes / lifeSpanMinutes) * 100;
}

console.log(
  "Series duration as percentage of life span:",
  seriesDurationsOutOfLifeSpan(
    totalSeriesDurationInMinutes,
    lifeSpanInMinutes
  ).toFixed(2) + "%"
);