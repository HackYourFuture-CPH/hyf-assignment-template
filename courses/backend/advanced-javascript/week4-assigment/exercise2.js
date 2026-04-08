import { teas } from "../teas.js";
class OrderItem {
    constructor(tea, grams) {
        // tea is a Tea instance, grams is a positive number
        // Validate: grams must be positive
    }

    lineTotal() {
        // Use tea.priceFor()
    }

    describe() {
        // "200g Sencha - 24.00 DKK"
    }
}

class Order {
    constructor() {
        // items array, status starts as "pending"
    }

    addItem(orderItem) {
        // Add item (only when pending)
    }

    getTotal() {
        // Sum all line totals using .reduce()
    }

    getSummary() {
        // Return formatted multi-line string:
        // "Order (pending) - 2 items"
        // "  200g Sencha - 24.00 DKK"
        // "  50g Matcha - 22.50 DKK"
        // "Total: 46.50 DKK"
    }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const order = new Order();
order.addItem(new OrderItem(teaInstances[0], 200)); // Sencha
order.addItem(new OrderItem(teaInstances[7], 50)); // Matcha

console.log(order.getSummary());
console.log("Total:", order.getTotal().toFixed(2), "DKK");