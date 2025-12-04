



const activities = getActivities();

addActivity("23/7-18", "Youtube", 30);

function addActivity(date, activity, duration){
    activities.push({
        date: date,
        activity: activity,
        duration: duration,
    });
}

function getActivities() { 
    return [];

}
console.log(activities);
