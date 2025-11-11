const boughtCandyPrices=[];
let totalPrice=0;
const amountToSpend=Math.random() * 100;
function addCandy(candyType, weight){
    let pricePerGram;
    if(candyType.toLowerCase()==="sweet"){
        pricePerGram=0.5;
    }
    else if(candyType.toLowerCase()==="chocolate"){
        pricePerGram=0.7;
    }
   else if(candyType.toLowerCase()==="toffee"){
        pricePerGram=1.1;} 
   else if(candyType.toLowerCase()==="chewing-gum"){
        pricePerGram=0.03;} 
        else{
        return; //skip unavailable candy     
}
    const price=weight*pricePerGram;
        totalPrice +=price;}
       function getTotalPrice(){
        return totalPrice();
    }
function canBuyMoreCandy(){
    return getTotalPrice < amountToSpend;
}
    while (canBuyMoreCandy()) {
  const types = ["sweet", "chocolate", "toffee", "chewing-gum"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomWeight = Math.floor(Math.random() * 25) + 1;
  addCandy(randomType, randomWeight);
}
if(canBuyMoreCandy()){
    console.log( "You can buy more, so please do!");}
    else {
        (console.log("Enough candy for you!"));
    }
console.log("Final total price: " + totalPrice.toFixed(2) + " DKK");
console.log("Budget: " + amountToSpend.toFixed(2) + " DKK");
