const boughtCandyPrices = [];
let pricePerGram = 0;
const amountToSpend = Math.random() * 100;
function addCandy(type, weight) {
  if (type === "sweet") {
    pricePerGram = 0.5;
  } else if (type === "chocolate") {
    pricePerGram = 0.7;
  } else if (type === "toffee") {
    pricePerGram = 1.1;
  } else if (type === "chewing-gum") {
    pricePerGram = 0.03;
  }

  const candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
}
function canBuyMoreCandy() {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

addCandy("sweet", 10);
addCandy("chocolate", 10);
addCandy("toffee", 30);
console.log(boughtCandyPrices);
canBuyMoreCandy();
