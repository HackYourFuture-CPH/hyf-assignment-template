//Candy Store 
const boughtCandyPrices = [];
function addCandy(candyType, weight) {

  const type = candyType.toLowerCase();
  let pricePerGram = 0;
  if (type === "sweet") pricePerGram = 0.5;
  else if (type === "chocolate") pricePerGram = 0.7;
  else if (type === "toffee") pricePerGram = 1.1;
  else if (type === "chewing-gum") pricePerGram = 0.03;
  else {
    console.log("Unknown candy type:", candyType);
   
  }

  const candyPrice = weight * pricePerGram;
  boughtCandyPrices.push(candyPrice);
  console.log(`Added ${candyType}. Price: ${candyPrice.toFixed(2)}`);
}
const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  
  let total = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total += boughtCandyPrices[i];
  }
  console.log(`Total spent: ${total.toFixed(2)} out of ${amountToSpend.toFixed(2)}`);
  return total < amountToSpend;
}
addCandy("Sweet", 20);
addCandy("Chocolate", 1);
addCandy("Toffee", 4);
addCandy("Chewing-gum", 5);
addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 30);
console.log("Bought prices array:", boughtCandyPrices);
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please go ahead!");
} else {
  console.log("Enough candy for you!");
}