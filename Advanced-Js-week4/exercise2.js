import { teas } from "./teas.js";
class Tea {
  constructor(name, type, origin, pricePerGram, organic) {
    this.name = name;
    this.type = type;
    this.origin = origin;
    this.pricePerGram = pricePerGram;
    this.organic = organic;
  }
  priceFor(grams) {
    return this.pricePerGram * grams;
  }
  static fromObject(obj) {
    // Create a Tea from a plain object
    const { name, type, origin, pricePerGram, organic } = obj;
    return new Tea(name, type, origin, pricePerGram, organic);
  }
}
class OrderItem {
  constructor(tea, grams) {
    // Validate: grams must be positive
    if (typeof grams !== "number" || grams <= 0) {
      throw new Error("grams must be a positive number");
    }
    // tea is a Tea instance, grams is a positive number
    this.tea = tea;
    this.grams = grams; //positive number
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
    this.items = [];
    this.status = "pending";
  }

  addItem(orderItem) {
    // Add item (only when pending)
    if (this.status !== "pending") {
      throw new Error("Cannot add items unless order is pending");
    }
    this.items.push(orderItem);
  }

  getTotal() {
    // Sum all line totals using .reduce()
    const total = this.items.reduce((sum, item) => sum + item.lineTotal(), 0);
    return total;
  }

  getSummary() {
    // Return formatted multi-line string summary
    const header = `Order (${this.status}) - ${this.items.length} items`;
    const lines = this.items.map((item) => ` ${item.describe()}`).join("\n");
    const total = `Total: ${this.getTotal().toFixed(2)} DKK`;
    return `${header}\n${lines}\n${total}`;
  }
}
// Test:
const teaInstances = teas.map(Tea.fromObject);
const order = new Order();
order.addItem(new OrderItem(teaInstances[0], 200)); // Sencha
order.addItem(new OrderItem(teaInstances[7], 50)); // Matcha

console.log(order.getSummary());
