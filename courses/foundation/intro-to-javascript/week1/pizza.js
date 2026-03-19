const pizzaPrice = 89;
console.log(
  `New pizza order: ${favouritePizza}. The price of the pizza is: ${pizzaPrice}`
);
//Part2
const pizzaAmount = 2;
const isTakeaway = true;
const totalPrice = (name, price, amount, takeaway) => {
  const orderPrice = price * amount;
  let finalPrice = takeaway ? orderPrice + orderPrice * 0.2 : orderPrice;
  console.log(
    `New pizza order (takeaway: ${takeaway}): ${pizzaAmount} ${
      pizzaAmount > 1 ? name + "s" : name
    }. Total cost for the order is: ${finalPrice}`
  );
};
totalPrice(favouritePizza, pizzaPrice, pizzaAmount, isTakeaway);
