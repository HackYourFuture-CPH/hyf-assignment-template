//#2 Calculate time to reach the destination in minutes

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTimeInMinutes(distance, speed) {
  return (distance / speed) * 60;
}

console.log(
  calculateTravelTimeInMinutes(
    travelInformation.destinationDistance,
    travelInformation.speed
  )
);

const travelTimeInInMinutes = calculateTravelTimeInMinutes(
  travelInformation.destinationDistance,
  travelInformation.speed
);

//Converted minutes into hours and minutes

function calculateTravelTimeInHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  return `${hours}hours ${minutes}minutes`;
}
console.log(calculateTravelTimeInHoursAndMinutes(travelTimeInInMinutes)); // 8 hours and 38 minutes