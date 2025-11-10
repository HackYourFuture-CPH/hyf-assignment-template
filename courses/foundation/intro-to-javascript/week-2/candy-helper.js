const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let price;

  switch (candyType) {
    case "sweet":
      price = 0.5;
      break;
    case "chocolate":
      price = 0.7;
      break;
    case "toffee":
      price = 1.1;
      break;
    case "chewing-gum":
      price = 0.03;
      break;
    default:
      console.log("Unknown candy");
      return;
  }

  boughtCandyPrices.push(weight * price);
  return boughtCandyPrices;
}

addCandy("sweet", 20);
addCandy("toffee", 50);
addCandy("chewing-gum", 10);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
console.log("Amount to spend: " + amountToSpend);

function canBuyMoreCandy(array, money) {
  let alreadySpent = 0;
  for (let i = 0; i < array.length; i++) {
    alreadySpent += array[i];
  }
  console.log("Already spent: " + alreadySpent);

  if (money > alreadySpent) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you");
  }
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);
