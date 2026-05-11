


const travelInformation = {
  speed: 60,
  destinationDistance: 214,
};

function calculateTravelTime ({speed, destinationDistance}) {
  
  const timeInHours = destinationDistance / speed; // decimal hours
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);
  return hours +" "+ "hours" + " " + "and" +" " + minutes + " " + "minutes";
}


const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);