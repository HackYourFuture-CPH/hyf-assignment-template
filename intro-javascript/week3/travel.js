const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function notThisFunctionName(info) {
  const totalTime = info.destinationDistance / info.speed;
  const hours = Math.floor(totalTime);
  const minutes = Math.floor((totalTime - hours) * 60);
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime);
