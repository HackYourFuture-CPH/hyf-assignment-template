//Candy helper optional
let boughtCandy =  [];

function addCandy(candyType, weight) {
    const candyPricePerGram = {
        sweet: 0.5,
        chocolate: 0.7,
        toffee: 1.1,
        chewing_gum: 0.03
};
   
if (!candyPricePerGram[candyType]) {
        console.error("Unknown candy type");
        return;
    }

    const price = candyPricePerGram[candyType] * weight;
    boughtCandy.push(price);
}


addCandy("chocolate", 30);
addCandy("sweet", 10);
    alert(boughtCandy.length)
    

let amountToSpend = Math.random() * 100;
  alert(amountToSpend);
  
function canBuyMoreCandy(amountToSpend) {
    let totalSpent = 0

    for (const candy of boughtCandy) {
        totalSpent += candy;
    }

    alert(totalSpent);

    if  (totalSpent < amountToSpend) {
            console.log("You can buy more, so please do!");
    }       console.log("Enough candy for you!")
   }

canBuyMoreCandy(amountToSpend);