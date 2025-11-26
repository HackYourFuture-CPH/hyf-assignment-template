const activities= [];
const usageLimit=120 // daily limit in minutes
function addActivity(activity, duration){
    const today=new Date();
    const dateString=today.toISOString().split("T")[0];
activities.push({date:dateString, activity:activity, duration:duration}); 
}
// create showStatus function
function showStatus(){
    const activitiesLength=activities.length;
     if(activitiesLength===0){
console.log("Add some activities before calling showStatus");
return;
     }
let totalDuration=0;
for (let i=0; i<activitiesLength;i++){
    totalDuration += activities[i].duration;
}
    console.log("you have added "+ activitiesLength+" activities. They amount to "+totalDuration+" minutes of usage");
    console.log("Number of activities used are  "+ activities.length);
    if(totalDuration>=usageLimit){
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}
//create logActivities function
function logActivities(){
    const activitiesLength=activities.length;
    if(activitiesLength===0){
        console.log("No activities logged yet.");
        return;
    }
    for(let i=0; i<activitiesLength;i++){
        const activity=activities[i];
        console.log("on "+ activity.date + " you used "+ activity.activity+" for "+ activity.duration+" minutes");
    }
} 
//add sample activity
addActivity( "Facebook", 100);
addActivity( "youtube", 30);
addActivity( "telegram", 50);
    
    showStatus();
  logActivities();
