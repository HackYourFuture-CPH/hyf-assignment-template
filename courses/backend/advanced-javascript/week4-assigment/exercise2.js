import { teas } from "../teas.js";
class OrderItem {

    constructor(tea, grams) {
        if (typeof grams !== "number" || grams <= 0) {
            throw new Error("Grams must be a positive number");
        }
        this.tea = tea;
        this.grams = grams;
    }

    lineTotal() {
        // Use tea.priceFor()
        return this.tea.priceFor(this.grams);
    }

    describe() {
        // "200g Sencha - 24.00 DKK"
        return `${this.grams}g ${this.tea.name} - ${this.lineTotal().toFixed(2)} DKK`;
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