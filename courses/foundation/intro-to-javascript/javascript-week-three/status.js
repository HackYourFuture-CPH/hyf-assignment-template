

const activities = getActivities();

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 28);
addActivity("23/7-18", "Tiktok", 20);

function addActivity(date, activity, duration){
    activities.push({
        date,
        activity,
        duration
    });
}

function getActivities() { 
    return [];
}

function showStatus(activities){
    let total = 0;
    for (let i = 0; i < activities.length; i++){
        total += activities[i].duration;
    }
    return total; 
} 

const total = showStatus(activities);

console.log("You have added " + activities.length + " activities. They amount to " + total + " min of usage");
