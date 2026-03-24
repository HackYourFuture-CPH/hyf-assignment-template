
const temperature = 25;
  
const outfit = whatToWear(temperature);  // Determine what to wear

console.log(outfit);    

function whatToWear (temperature) {
    if (temperature < 0 ) {
        return "It's freezing - wear a warm clothes."; }
     
        else if (temperature < 10) {
        return "Wear a jacket and scarf."; }
   
        else if (temperature < 20) {
   return "Sweater should be fine";
} 
else if (temperature <= 30){ 
    return "Wear a t-shirt and shorts";
}
else {
    return "Wear very light and stay hydrated";
}
}

 
    