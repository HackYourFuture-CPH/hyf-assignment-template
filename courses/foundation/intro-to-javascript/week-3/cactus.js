const activities = [];
const limit = 90;

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
  return activities;
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Youtube", 30);

console.log(activities);

function showStatus(activitiesArray) {
  let durationSum = 0;
  for (i = 0; i < activitiesArray.length; i++) {
    durationSum += activitiesArray[i].duration;
  }

  if (activitiesArray.length === 0) {
    return "Add some activities before calling showStatus";
  } else {
    if (durationSum >= limit) {
      return "You have reached your limit, no more smartphoning for you!";
    } else {
      return (
        "You have added " +
        activitiesArray.length +
        "  activities. They amount to " +
        durationSum +
        " min. of usage"
      );
    }
  }
}

const actStatus = showStatus(activities);
console.log(actStatus);
