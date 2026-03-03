// Candy helper

const boughtCandyPrices = [];

// price-per-gram table
const PRICE_PER_GRAM = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  'chewing-gum': 0.03
};

let amountToSpend = Math.random() * 100;


function addCandy(candyType, weight) {
  if (typeof candyType !== 'string') return;
  if (typeof weight !== 'number' || weight <= 0) return;

  const typeKey = candyType.trim().toLowerCase();
  const pricePerGram = PRICE_PER_GRAM[typeKey];

  if (typeof pricePerGram !== 'number') return;

  const price = pricePerGram * weight;
  boughtCandyPrices.push(price);
}


function canBuyMoreCandy() {
  let total = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total += boughtCandyPrices[i];
  }

  if (total < amountToSpend) {
    console.log('You can buy more, so please do!');
    return true;
  } else {
    console.log('Enough candy for you!');
    return false;
  }
}

/* --- Example usage --- */

// reset example state (optional)
boughtCandyPrices.length = 0;
amountToSpend = Math.random() * 100;

addCandy('sweet', 20);        // 20 * 0.5 = 10
addCandy('chocolate', 30);    // 30 * 0.7 = 21
addCandy('toffee', 5);        // 5 * 1.1 = 5.5
addCandy('chewing-gum', 50);  // 50 * 0.03 = 1.5

console.log('Amount to spend:', amountToSpend.toFixed(2));
console.log('Bought candy prices:', boughtCandyPrices.map(p => p.toFixed(2)));
console.log('Total spent:', boughtCandyPrices.reduce((s, p) => s + p, 0).toFixed(2));

canBuyMoreCandy();
