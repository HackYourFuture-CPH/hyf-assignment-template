import { teas } from "./teas.js";

const order = {
  id: 1001,
  customerId: 42,
  items: [
    { teaId: 1, grams: 100 },
    { teaId: 8, grams: 50 },
    { teaId: 3, grams: 200 },
  ],
};
//  Validate
export function validateOrder(order, callback) {
  setTimeout(() => {
    const errors = order.items
      .filter((item) => !teas.find((t) => t.id === item.teaId))
      .map((item) => `Tea with id ${item.teaId} not found`);

    callback({ valid: errors.length === 0, errors });
  }, 200);
}
validateOrder(order, console.log);
// Calculate total
export function calculateTotal(order, callback) {
  setTimeout(() => {
    let total = 0;
    for (const item of order.items) {
      const tea = teas.find((t) => t.id === item.teaId);
      if (tea) total += tea.pricePerGram * item.grams;
    }

    callback({ orderId: order.id, total });
  }, 300);
}
calculateTotal(order, console.log);

// Check stock
export function checkStock(order, callback) {
  setTimeout(() => {
    const shortages = [];

    for (const item of order.items) {
      const tea = teas.find((t) => t.id === item.teaId);
      if (tea && tea.stockCount < item.grams) {
        shortages.push(`${tea.name} not enough stock`);
      }
    }

    callback({
      orderId: order.id,
      inStock: shortages.length === 0,
      shortages,
    });
  }, 400);
}
checkStock(order, console.log);
