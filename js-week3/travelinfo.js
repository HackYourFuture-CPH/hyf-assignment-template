function calculateTime(speed,distance){}
const travelInformation = {
  speed: 90, //km/hr
  destinationDistance: 400, //km
};
const travelTimeInHours = travelInformation.destinationDistance/travelInformation.speed;
const hours= Math.floor(travelTimeInHours);
const minutes= Math.round((travelTimeInHours-hours)*60);

console.log("It will take to arrive: " + hours + " hours and " + minutes+ " minutes"); 