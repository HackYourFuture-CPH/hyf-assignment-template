//CactusIO-interactive (Smart phone usage app) optional

//Adding an activity


const activities =[];

function addActivity(date, activity ,duration){
    if(typeof date !=="string"|| typeof activity!=="string"|| typeof duration!=="number" ){
     console.log("Invalid input");
     return;   
    }

const info={ date: date,
    activity: activity,
    duration: duration,
}
activities.push(info);
}
addActivity("22/7/2025","netflix",23)
addActivity("20/7/2025","youtube",30)
addActivity("9/6/2025","mobile",80)
addActivity("7/7/2025","youtube",22)

console.log(activities);

//Show my status &&. Usage limit

function showStatus(activities){
if(activities.length === 0){
    return `Add some activities before calling showStatus`;
}
const numberOfActivities = activities.length
let totalDuration=0;
for(let i=0; i < activities.length; i++){
   totalDuration += activities[i].duration;
}
let message = `You have added ${numberOfActivities} activities. They amount to ${totalDuration} min. of usage`;
 if(usageLimit > 0 && totalDuration > usageLimit){
       message +=  " You have reached your limit, no more smartphoning for you!";
    }
return message;

}

 let usageLimit=0;
function setUsageLimit(limit) {
    usageLimit = limit;
    
    }
   
(setUsageLimit(100));
console.log(showStatus(activities));