import { teas } from "./teas.js";
class Tea {
  constructor(name, type, origin, pricePerGram, organic) {
    this.name = name;
    this.type = type;
    this.origin = origin;
    this.pricePerGram = pricePerGram;
    this.organic = organic;
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
    this.tea = tea;
    this.grams = grams;
  }
  lineTotal() {
    return this.tea.pricePerGram * this.grams;
  }

  describe() {
    return `${this.grams}g ${this.tea.name} - ${this.lineTotal().toFixed(2)} DKK`;
  }
}
class Order {
  constructor() {
    this.items = [];
    this.status = "pending";
  }

  addItem(orderItem) {
    if (this.status !== "pending") {
      throw new Error("Cannot add items unless order is pending");
    }
    this.items.push(orderItem);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.lineTotal(), 0);
  }

  getSummary() {
    const header = `Order (${this.status}) - ${this.items.length} items`;
    const lines = this.items.map((item) => ` ${item.describe()}`).join("\n");
    const total = `Total: ${this.getTotal().toFixed(2)} DKK`;
    return `${header}\n${lines}\n${total}`;
  }
}
class Customer {
  constructor(name, email) {
    // Store name, email, and empty orders array
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  placeOrder(order) {
    // Confirm the order
    if (order.status !== "pending") {
      throw new Error("Order must be pending to confirm");
    }
    order.status = "confirmed";
    // Add to customer's order history
    this.orders.push(order);
  }

  totalSpent() {
    // Sum all order totals using .reduce()
    return this.orders.reduce((sum, order) => sum + order.getTotal(), 0);
  }

  getOrderHistory() {
    // Return formatted string of all orders
    let orderHistory = `${this.name} (${this.email}) - ${this.orders.length} orders\n`;
    this.orders.forEach((order, index) => {
      orderHistory += `\nOrder ${index + 1}(${order.status}) - ${order.items.length} item${order.items.length !== 1 ? "s" : ""}\n`;
      order.items.forEach((item) => {
        orderHistory += ` ${item.describe()}\n`;
      });
      orderHistory += `Total: ${order.getTotal().toFixed(2)} DKK\n`;
    });
    orderHistory += `\nLifetime total: ${this.totalSpent().toFixed(2)} DKK`;
    return orderHistory;
  }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const customer = new Customer("Alex", "alex@example.com");

const order1 = new Order();
order1.addItem(new OrderItem(teaInstances[0], 100)); // Sencha
customer.placeOrder(order1);

const order2 = new Order();
order2.addItem(new OrderItem(teaInstances[7], 50)); // Matcha
customer.placeOrder(order2);

console.log(customer.getOrderHistory());
console.log("Total spent:", customer.totalSpent().toFixed(2), "DKK");
