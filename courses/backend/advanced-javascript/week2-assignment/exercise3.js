import { teas } from "./teas.js";

import { validateOrder, calculateTotal, checkStock } from "./exercise2.js";

const order = {
  id: 1001,
  customerId: 42,
  items: [
    { teaId: 1, grams: 100 },
    { teaId: 8, grams: 50 },
    { teaId: 3, grams: 200 },
  ],
};
function processOrder(order) {
  console.log("Processing order", order.id);

  validateOrder(order, (validation) => {
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return;
    }
    console.log("Validation passed");

    calculateTotal(order, (pricing) => {
      console.log("Total:", pricing.total);

      checkStock(order, (stock) => {
        if (!stock.inStock) {
          console.log("Stock issues:", stock.shortages);
          return;
        }

        console.log("Order processed successfully!");
      });
    });
  });
}

processOrder(order);
