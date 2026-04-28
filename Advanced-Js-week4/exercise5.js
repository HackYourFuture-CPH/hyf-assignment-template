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
    const { name, type, origin, pricePerGram, organic } = obj;
    return new Tea(name, type, origin, pricePerGram, organic);
  }
}
class OrderItem {
  constructor(tea, grams) {
    if (grams <= 0) {
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
  addItem(item) {
    if (this.status !== "pending") {
      throw new Error("Cannot add items unless it is pending");
    }
    this.items.push(item);
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
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  placeOrder(order) {
    if (order.status !== "pending") {
      throw new Error("Order must be pending to confirm");
    }
    order.status = "confirmed";
    this.orders.push(order);
  }
  totalSpent() {
    return this.orders.reduce((sum, order) => sum + order.getTotal(), 0);
  }
}
class TeaCatalog {
  constructor(teas) {
    this.teas = teas;
  }
  findTea(name) {
    return this.teas.find((t) => t.name === name);
  }
}
class Inventory {
  constructor() {
    this.items = new Map();
  }
  add(tea, stockCount) {
    this.items.set(tea.name, { tea, stockCount });
  }
  sell(teaName, grams) {
    const entry = this.items.get(teaName);
    if (!entry) throw new Error(`Tea ${teaName} not found`);

    if (entry.stockCount < grams)
      throw new Error(`Not enough stock of ${teaName}`);

    entry.stockCount -= grams;
  }
  getLowStock(threshold) {
    return [...this.items.values()].filter(
      (item) => item.stockCount < threshold,
    );
  }
}
class TeaShop {
  constructor(teaData) {
    // Create a TeaCatalog from the data
    const teas = teaData.map((obj) => Tea.fromObject(obj));
    this.catalog = new TeaCatalog(teas);

    // Create inventory from the data
    this.inventory = new Inventory();
    teaData.forEach((obj) => {
      this.inventory.add(this.catalog.findTea(obj.name), obj.stockCount);
    });

    // Store customers as an empty array
    this.customers = [];
  }

  registerCustomer(name, email) {
    // Create and return a new Customer
    const customer = new Customer(name, email);
    this.customers.push(customer);
    return customer;
  }

  createOrder(customer, items) {
    // items is array of { teaName, grams }
    const order = new Order();
    // Find each tea in the catalog
    items.forEach(({ teaName, grams }) => {
      const tea = this.catalog.findTea(teaName);
      if (!tea) throw new Error(`Tea ${teaName} not found`);
      //checkStock and Sell from inventory
      this.inventory.sell(teaName, grams);
      //Create OrderItems and an Order
      order.addItem(new OrderItem(tea, grams));
    });
    //  Place order on the customer
    customer.placeOrder(order);
    // Return the order
    return order;
  }

  getReport() {
    // Total customers
    const totalCustomers = this.customers.length;
    // Total orders
    const totalOrders = this.customers.reduce(
      (sum, c) => sum + c.orders.length,
      0,
    );
    // Total revenue
    const totalRevenue = this.customers.reduce(
      (sum, c) => sum + c.totalSpent(),
      0,
    );
    // Low stock items
    const lowStock = this.inventory.getLowStock(50);
    return `Tea Shop Report
    -------------
Customers: ${totalCustomers}
Orders: ${totalOrders}
Revenue: ${totalRevenue.toFixed(2)} DKK
Low Stock:
${lowStock.map((i) => `  ${i.tea.name}: ${i.stockCount}g`).join("\n")}
`;
  }
}

// Test:
const shop = new TeaShop(teas);

const alex = shop.registerCustomer("Alex", "alex@example.com");
const maria = shop.registerCustomer("Maria", "maria@example.com");

const order1 = shop.createOrder(alex, [
  { teaName: "Sencha", grams: 100 },
  { teaName: "Matcha", grams: 25 },
]);
console.log(order1.getSummary());

const order2 = shop.createOrder(maria, [{ teaName: "Earl Grey", grams: 200 }]);
console.log(order2.getSummary());

console.log(shop.getReport());
