const travelInformation={
   speed : 50,
  distance: 432,};
function travelTime(info)
{
  const totalHours = info.distance / info.speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  console.log(`Travel time is ${hours} hours and ${minutes} minutes.`);
}

conole.log(travelTime(info));
