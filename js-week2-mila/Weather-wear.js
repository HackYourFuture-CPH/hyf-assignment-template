//Weather wear

let temperature = prompt("What is the temperature in °C?");
temperature = Number(temperature);


function adviceClothesToWear(temperature) {

    if (temperature == "") {
        return "Please, enter the value of temperature in °C "; 
    }
    if (isNaN(temperature)) {
        return "Please, enter the temperature as number in °C ";
    }
    if (temperature < 0) {
        return "It is cold outside, you should wear a hat, scarf, jacket, and boots.";
         } 
    else if (temperature < 15) {
        return "It is cool outside, you should wear a jacket and shoes.";
         } 
    else if (temperature < 25) {
        return "It is warm outside, you should wear a sweater and shoes.";
         }     
    
        return "It is hot outside, you should wear a T-shirt and shorts.";
        
}

const clothesToWear = adviceClothesToWear(temperature);
alert(clothesToWear);
console.log(clothesToWear);
