const activities = [];

function addActivity(date, activity, duration) {
  const newActivity = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(newActivity);
}

function logActivities() {
  console.log("All smartphone activities:");
  for (let i = 0; i < activities.length; i++) {
    const act = activities[i];
    console.log(
      "On " +
        act.date +
        ", you spent " +
        act.duration +
        " minutes on " +
        act.activity
    );
  }
}

function totalUsage() {
  let total = 0;
  for (let i = 0; i < activities.length; i++) {
    total += activities[i].duration;
  }
  console.log("Total smartphone usage today: " + total + " minutes");
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/7-18", "Reading news", 10);

logActivities();

totalUsage();
