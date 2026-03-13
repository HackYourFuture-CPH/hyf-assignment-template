
const seriesDurations = [
  {
    title: "The Blacklist",
    days: 3,
    hours: 6,
    minutes: 2,
  },
  {
    title: "Suits",
    days: 3,
    hours: 21,
    minutes: 48,
  },
  {
    title: "The Good Doctor",
    days: 3,
    hours: 18,
    minutes: 18,
  },
];


const lifespanYears = 80;



function logOutSeriesText() {
  
const minutesInYear = 60 * 24 * 365.25; // minutes in one year
    let totalMinutes = 0;

    // Calculate percentage per series
        seriesDurations.forEach(series => { const seriesMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
        totalMinutes += seriesMinutes;

        const seriesYears = seriesMinutes / minutesInYear;
        const seriesPercentage = (seriesYears / lifespanYears) * 100;
    console.log(series.title + " took " + seriesPercentage.toFixed(3) + "% of my life");
    });

    // Total percentage
    const totalYears = totalMinutes / minutesInYear;
    const totalPercentage = (totalYears / lifespanYears) * 100;

    console.log("In total that is " + totalPercentage.toFixed(3) + "% of my life");
}


logOutSeriesText(seriesDurations); 

