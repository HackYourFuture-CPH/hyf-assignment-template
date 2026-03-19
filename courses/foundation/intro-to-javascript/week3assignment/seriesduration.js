const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  { title: "Breaking Bad", days: 1, hours: 12, minutes: 0 },
  { title: "The Wire", days: 2, hours: 12, minutes: 0 },
  { title: "Friends", days: 2, hours: 5, minutes: 0 },
];
let totalPercent = 0;
const lifeSpanInMinutes = 80 * 365 * 24 * 60;

for (let i = 0; i < seriesDurations.length; i++) {
  const series = seriesDurations[i];
  const seriesInMinutes =
    series.days * 24 * 60 + series.hours * 60 + series.minutes;
  const percentage = (seriesInMinutes / lifeSpanInMinutes) * 100;
  totalPercent += percentage;
  console.log(`${series.title} took ${percentage.toFixed(3)}% of my life.`);
}
console.log(
  `In total, these series took ${totalPercent.toFixed(3)}% of my life.`
);
