//Weather Wear 
function weatherWear(temperature){
    if(temperature<5){
        return "Wear a heavy coat,gloves,and a scarf.";
    }else if(temperature>=5 && temperature<10){
        return "Wear a coat and a sweater.";
    }else if(temperature>=10 && temperature<15){
return"Wear a jeans and full clothes" ;   
}else   if(temperature>=15 && temperature<20){
    return"Wear shorts and a t-shirt.";
    
}else{
    return"Wear light clothes,sunglasses and a hat.";
    
}
}
console.log("What to wear: " +weatherWear(3));
console.log("What to wear: " +weatherWear(10));
console.log("What to wear: " +weatherWear(18));
console.log("What to wear: " +weatherWear(25));

