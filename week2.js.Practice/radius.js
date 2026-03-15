 
 /*const PI = 3.14;
 function getCircleArea(radius){
 const area = PI * Math.pow(radius, 2);
    return area;

 }
 const result = getCircleArea(5);
 console.log(result);*/


 function celsiusToFahrenheit(celsius){
    const fahrenheit= (celsius*1.8)+32;
    return fahrenheit
 }
 const tempInFahrenheit = celsiusToFahrenheit(32);
 console.log(tempInFahrenheit);
 //console.log (celsiusToFahrenheit(32));

function getCylinderVolume(radius,height){
   const area= getCircleArea(radius);
   const volume= area*height;
   return volume;
}
getCylinderVolume(5,10);