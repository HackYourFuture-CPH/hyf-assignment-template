const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;
  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log("Unknown candy type!");
    return;
  }
  let candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
  console.log(candyType + " added, price: " + candyPrice);
}
const amountToSpend = Math.random() * 100;
console.log("You have $" + amountToSpend.toFixed(2) + " to spend");

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  if (totalPrice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}

addCandy("sweet", 20); // 20 * 0.5 = 10
addCandy("chocolate", 50); // 50 * 0.7 = 35
addCandy("toffee", 10); // 10 * 1.1 = 11
addCandy("chewing-gum", 100); // 100 * 0.03 = 3

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}

console.log("Bought candy prices:", boughtCandyPrices);
