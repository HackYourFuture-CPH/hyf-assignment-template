
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
function showStatus(activities){
    let total = 0;
    for (let i = 0; i < activities.length; i++){
        total += activities[i].duration;
    } return total;
}
if (showStatus(activities) > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
} else {
    console.log("You are under your limit. Keep going!");
}
const total = showStatus(activities);


showStatus(activities); 
