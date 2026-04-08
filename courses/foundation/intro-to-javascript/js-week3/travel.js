const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function totalTravelTime(travelInfo){
 const time = travelInfo.destinationDistance / travelInfo.speed;
 const hours =Math.floor(time);
 const minutes =Math.round((time - hours)*60);
 const sec = Math.round(((time - hours) * 60 - minutes) * 60);
return( "time to travel :"+hours+ "Hours and " + +minutes +" min "  + sec+" sec .");
}


const travelTime = totalTravelTime(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes