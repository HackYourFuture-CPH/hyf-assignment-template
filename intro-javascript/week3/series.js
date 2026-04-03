const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Modern Family",
    days: 7,
    hours: 14,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 8,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Simpsons",
    days: 1,
    hours: 5,
    minutes: 30,
  }
];

function logOutSeriesText() {
  const lifeInYears = 80;
  const lifeInMinutes = lifeInYears * 365 * 24 * 60;
  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    // convert everything to minutes
    const daysToMinutes = series.days * 24 * 60;
    const hoursToMinutes = series.hours * 60;
    const minutes = series.minutes;

    const totalSeriesMinutes = daysToMinutes + hoursToMinutes + minutes;

    const percentage = (totalSeriesMinutes / lifeInMinutes) * 100;
    totalPercentage += percentage;

    console.log(series.title + " took " + percentage.toFixed(3) + "% of my life");
  }

  console.log("In total that is " + totalPercentage.toFixed(3) + "% of my life");
}

logOutSeriesText();
