function clothesToWear(weather,temperature){
  const w=String(weather).toLowerCase();
if(w==='cold' && temperature <5){console.log("Wear a thick jacket");}
else if(w==='cold' && temperature>10){
    console.log("Wear normal jacket");
}
else if(w==='Partially sunny' && temperature <=15) 
    { console.log( "Wear light sweater ");} 
else if(w==='Sunny' && temperature >20)
    {console.log(" Wear sunglass and a cape ");}
else{
    console.log("Dress what do you like")
}

}
clothesToWear('sunny',22);
clothesToWear('cold', 1)
clothesToWear('cold',15);