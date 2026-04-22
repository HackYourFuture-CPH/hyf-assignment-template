//#1 Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = names.indexOf("Ahmad");
if (nameToRemove !== -1) {
  names.splice(nameToRemove, 1);
}

console.log(names); 

//#2 Calculate time to reach the destination in minutes

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTimeInMinutes(distance, speed) {
  return (distance/speed) * 60;
};

console.log(
  calculateTravelTimeInMinutes(
    travelInformation.destinationDistance,
    travelInformation.speed
  )
);



const travelTimeInMinutes = calculateTravelTimeInMinutes(
  travelInformation.destinationDistance,
  travelInformation.speed
);

//Converted minutes into hours and minutes

function calculateTravelTimeInHoursAndMinutes(totalMinutes) {
  if (totalMinutes < 60) {
    return `${totalMinutes} minutes`;
  }
  const hours = Math.floor(totalMinutes / 60); 
  const minutes =  Math.round(totalMinutes % 60); 
  return `${hours} hours ${minutes} minutes`;
}
console.log(calculateTravelTimeInHoursAndMinutes(travelTimeInInMinutes)
); // 8 hours and 38 minutes

//#3 Series duration of my life

const seriesDurations = [
  {
    title: "Lost",
    days: 3,
    hours: 16,
    minutes: 30,
  },
  {
    title: "The Residence",
    days: 0,
    hours: 7,
    minutes: 44,
  },
  {
    title: "The The Queen's Gambit",
    days: 0,
    hours: 6,
    minutes: 32,
  },
];

//Calculate total series duration in minutes

 let totalSeriesDurationInMinutes = 0;

 for (const duration of seriesDurations) {
   totalSeriesDurationInMinutes +=((duration.days*24*60)+(duration.hours *60)+duration.minutes);
  }
    
console.log(totalSeriesDurationInMinutes);

// Convert Life span into minutes

function convertLifeSpanYearsIntoMinutes(years) {
  return (years*525600);//1 year = 525600 minutes
}

//Ask for age
let  lifeSpanInYears = prompt("How old are you?");
lifeSpanInYears = Number(lifeSpanInYears);

function validateLifeSpanInput(lifeSpanInYears) {
  if (isNaN(lifeSpanInYears) || lifeSpanInYears === "" || lifeSpanInYears == null) {
    console.log("Please enter a valid number.");
    return;
  }

const lifeSpanInMinutes = convertLifeSpanYearsIntoMinutes(lifeSpanInYears);
 
//Calculate series duration as a percentage of life span
function seriesDurationsOutOfLifeSpan(seriesMinutes, lifeSpanMinutes) {
  return (seriesMinutes/lifeSpanMinutes) * 100;
};

console.log(
    "Series duration as percentage of life span:",
  seriesDurationsOutOfLifeSpan(
   totalSeriesDurationInMinutes,
   lifeSpanInMinutes
  ).toFixed(2) + "%"
);


//#4 Note taking app

//Save a note

let notes = [];

  function saveNote(content, id) {
    if (content.trim() !== "") {
      notes.push({ id, content })
    }
  }

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log("Current notes:", notes);

//Get a note by id

function getNote(id){ 
  //Check if id is missing or not a number
  if (id === undefined ||
    typeof id !== "number") {
    console.log("Error");
    return;
  }
  //Loop to find the note with the id
   for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i]; // return the note object
    }
  }
  //If the id is not found
    return "Not found";
  }
  
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  for (let note of notes) { 
    console.log(`The note with id: ${note.id}, has the following note text:${note.content}`);
  }
  }

logOutNotesFormatted(); 

//Delete a note

//Keep undeleted notes
function deleteNote(id) {
    let newNotes = [];
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id !== id) {
            newNotes.push(notes[i]);
        }
    }
    notes = newNotes;
      

}

//#5 Adding an activity

let activities = [
  {
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
  },
  {
    date: '24/7-18',
    activity: 'Instagram',
    duration: 40,
  },
  {
    date: '25/7-18',
    activity: 'Facebook',
    duration: 50,
  }
];

function addActivities(date, activity, duration) { 
  activities.push({
    date: date,
    activity: activity,
    duration: duration
  });
}

addActivities('26/7-18', 'Twitter', 10);
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

  if (totalActivitiesDurationInMinutes  === 0) {
    return("Add some activities before calling showStatus");
  }  

  return (`You have added ${activities.length} activities. They amount to ${totalActivitiesDurationInMinutes} min. of usage.`)
}
JS
console.log(showStatus());


//Usage limit

let timeToUseSmartphone = Number(prompt("How long can you use the smartphone?"));

timeToUseSmartphone = Number(timeToUseSmartphone);

function canUseMoreSmartphone(timeLimit, totalActivitiesDurationInMinutes) {
    
    if  (totalActivitiesDurationInMinutes < timeLimit) {
      console.log("You can use the smartphone!");
    } else {
      console.log("You have reached your limit, no more smartphoning for you!")
    }
}

  canUseMoreSmartphone(timeToUseSmartphone, getTotalDuration());