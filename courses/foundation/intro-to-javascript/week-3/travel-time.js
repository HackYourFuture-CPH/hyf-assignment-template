const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToDestination(speed, destinationDistance) {
  const time = destinationDistance / speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return hours + " hours and " + minutes + " minutes.";
}

const travelTime = timeToDestination(
  travelInformation.speed,
  travelInformation.destinationDistance
);
console.log(travelTime); // 8 hours and 38 minutes
