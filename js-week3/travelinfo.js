function calculateTime(travelInfo) {
  const { speed, destinationDistance } = travelInfo;

  if (typeof speed !== "number" || speed <= 0) {
    console.log("Invalid speed. Must be a positive number.");
    return;
  }
  if (typeof destinationDistance !== "number" || destinationDistance <= 0) {
    console.log("Invalid distance. Must be a positive number.");
    return;
  }

  const travelTimeInHours = destinationDistance / speed;
  const hours = Math.floor(travelTimeInHours);
  const minutes = Math.round((travelTimeInHours - hours) * 60);

  console.log(
    "It will take to arrive: " + hours + " hours and " + minutes + " minutes"
  );
}

const travelInformation = {
  speed: 90, // km/hr
  destinationDistance: 400, //km
};

// Call the function with the object
calculateTime(travelInformation);
