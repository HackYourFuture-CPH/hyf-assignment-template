const activities = [
  { date: "23/7-18", activity: "Youtube", duration: 30 },
  { date: "23/7-18", activity: "Facebook", duration: 20 },
  { date: "23/7-18", activity: "Reading news", duration: 28 },
];

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  const numberOfActivities = activities.length;

  let totalMinutes = 0;
  for (let i = 0; i < activities.length; i++) {
    totalMinutes += activities[i].duration;
  }

  console.log(
    "You have added " +
      numberOfActivities +
      " activities. They amount to " +
      totalMinutes +
      " min. of usage"
  );
}

showStatus(activities);

const emptyActivities = [];
showStatus(emptyActivities);
