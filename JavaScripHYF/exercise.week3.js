//Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
let index = names.indexOf(nameToRemove);
if (index > 0) {
  names.splice(index, 1);
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']


//Speed and distance

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  let time = travelInformation.destinationDistance / travelInformation.speed;
  let hours = Math.floor(time);
  let minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);


//Series duration...
const seriesDurations = [
  {
    title: "Modern Family",
    days: 5,
    hours: 9,
    minutes: 15,
  },
  {
    title: "Next gen chef",
    days: 10,
    hours: 23,
    minutes: 55,
  },
  {
    title: "The night agent",
    days: 10,
    hours: 17,
    minutes: 47,
  },
];

function logOutSeriesText(seriesDurations) {

  const lifeInMinutes = 80 * 365 * 24 * 60;

  seriesDurations.forEach((series) => {

    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    const totalPercentage = ((seriesMinutes / lifeInMinutes) * 100);

    console.log(`${series.title} took ${totalPercentage.toFixed()}% of my life`);
  });
}

logOutSeriesText(seriesDurations);


//Note taking app

let notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

function getNote(id) {
  return notes.find((note) => note.id === id);
}

function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  });
}


//Smartphone usage app

let activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}

function showStatus(activities) {

  let activitiesNumber = activities.length;
  let totalDuration = 0;
  const usageLimit = 100;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  if (activitiesNumber === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  if (totalDuration > usageLimit) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `You have added ${activitiesNumber} activities. They amount to ${totalDuration} min. of usage`;

}

showStatus(activities);

addActivity("2024-06-01", "Facebook", 35);
addActivity("2024-06-01", "Instagram", 20);
showStatus(activities);

addActivity("2024-06-02", "YouTube", 200);
showStatus(activities);



