const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelCalculate(info) {
  const totalTime = info.destinationDistance / info.speed;
  const hours = Math.floor(totalTime);
  const minutes = Math.floor((totalTime - hours) * 60);
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = travelCalculate(travelInformation);
console.log(travelTime);
