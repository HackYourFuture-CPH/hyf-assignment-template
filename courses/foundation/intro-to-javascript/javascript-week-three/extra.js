

const activities = getActivities();
const usageLimit = 70;

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 28);
addActivity("23/7-18", "Tiktok", 20);

function addActivity(date, activity, duration,){
    activities.push({
        date: date,
        activity: activity,
        duration: duration,
        
    });
}

function getActivities() { 
    return [];

}


function showStatus(date) {
    let count = 0;
    let total = 0;

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].date === date) {
            count++;
            total += activities[i].duration;
        }
    }
console.log("On " + date + ", you added " + count + " activities total of " + total + " minutes.");
}
   


function mostTimeSpent() {
    if (activities.length === 0) return null;

    let maxActivity = activities[0];

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].duration > maxActivity.duration) {
            maxActivity = activities[i];
        }
    }

    return maxActivity.activity;
}


showStatus("23/7-18");
console.log("Most time spent on:", mostTimeSpent());




