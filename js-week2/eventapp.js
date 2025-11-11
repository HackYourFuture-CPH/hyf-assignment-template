
function registerForEvent(name, index) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayName = days[today.getDay()]; 
  const group = index % 3;              

  console.log(name+ "registered on:" +dayName +" "+ "and"+" "+ "is in Group"+(group + 1));
}


registerForEvent("Julian", 0);
registerForEvent("Anna", 1);
registerForEvent("peter", 2);
registerForEvent("Lars", 3);

