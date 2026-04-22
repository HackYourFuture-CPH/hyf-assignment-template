//#5 Adding an activity

let activities = [
  {
    date: "23/7-18",
    activity: "Youtube",
    duration: 30,
  },
  {
    date: "24/7-18",
    activity: "Instagram",
    duration: 40,
  },
  {
    date: "25/7-18",
    activity: "Facebook",
    duration: 50,
  },
];

function addActivities(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

addActivities("26/7-18", "Twitter", 10);
console.log(activities);

//Calculate total Activity Duration

function getTotalDuration() {
  let totalActivitiesDurationInMinutes = 0;

  for (const activity of activities) {
    totalActivitiesDurationInMinutes += activity.duration;
  }
  return totalActivitiesDurationInMinutes;
}

//Show my status

function showStatus() {
  const totalActivitiesDurationInMinutes = getTotalDuration();

  if (totalActivitiesDurationInMinutes === 0) {
    return "Add some activities before calling showStatus";
  }

  return `You have added ${activities.length} activities. They amount to ${totalActivitiesDurationInMinutes} min. of usage.`;
}

console.log(showStatus());

//Usage limit

let timeToUseSmartphone = Number(
  prompt("How long can you use the smartphone?")
);

timeToUseSmartphone = Number(timeToUseSmartphone);

function canUseMoreSmartphone(timeLimit) {
  if (totalActivitiesDurationInMinutes < timeLimit) {
    console.log("You can use the smartphone!");
  } else {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

canUseMoreSmartphone(timeToUseSmartphone);
