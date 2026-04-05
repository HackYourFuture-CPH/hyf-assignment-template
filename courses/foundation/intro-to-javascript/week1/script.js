console.log("I love pizza")

let pizzaTypes = ["chilli pizza", "kebab pizza", "mexican pizza"];
let pizzaPrices = 75

console.log(`New pizza order : ${pizzaTypes} price of pizza is ${pizzaPrices} `)

let pizzaAmountOrder = 2;
let isTakeAway = false;


const totalPrice = pizzaAmountOrder * pizzaPrices
console.log(totalPrice)
console.log(`New pizza order : ${isTakeAway ? `is take away` : `Not take away`}, Amount of pizza is : ${pizzaAmountOrder}, ${pizzaTypes[0]}, Total cost for the order is: ${totalPrice} kr.`)