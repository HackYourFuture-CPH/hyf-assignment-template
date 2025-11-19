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
  {
    title: "True Detective",
    days: 1,
    hours: 3,
    minutes: 0,
  },
];

const averageLife = 80;

function logOutSeriesText(seriesArray) {
  const lifeInHours = averageLife * 365 * 24;
  for (let i = 0; i < seriesArray.length; i++) {
    const seriesInHours = seriesArray[i].days * 24 + seriesArray[i].hours;
    console.log(
      seriesArray[i].title +
        " took " +
        (seriesInHours / lifeInHours) * 100 +
        "% of my life"
    );
  }
}

logOutSeriesText(seriesDurations);
