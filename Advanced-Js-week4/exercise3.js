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

class Inventory {
  constructor() {
    // Store a Map or object of tea ID → { tea, stockCount }
    this.items = new Map();
  }

  add(tea, stockCount) {
    // Add a tea to inventory
    if (this.items.has(tea.name)) {
      throw new Error(`Tea ${tea.name} already exists in inventory`);
    }
    this.items.set(tea.name, { tea, stockCount });
  }

  sell(teaName, grams) {
    // Reduce stock. Throw if not enough stock
    const entry = this.items.get(teaName);
    if (!entry) {
      throw new Error(`Tea ${teaName} not found`);
    }
    if (entry.stockCount < grams) {
      throw new Error(`Not enough stock of ${teaName}`);
    }
    entry.stockCount -= grams;
  }

  restock(teaName, grams) {
    const entry = this.items.get(teaName);
    if (!entry) {
      throw new Error(`Tea ${teaName} not found`);
    }
    // Increase stock
    return (entry.stockCount += grams);
  }

  getStock(teaName) {
    // Return current stock count for a tea
    const entry = this.items.get(teaName);
    return entry ? entry.stockCount : 0;
  }

  getLowStock(threshold) {
    // Return array of { tea, stockCount } where stock < threshold
    return [...this.items.values()].filter(
      (item) => item.stockCount < threshold,
    );
  }

  getTotalValue() {
    // Sum of (pricePerGram * stockCount) for all items
    return [...this.items.values()].reduce(
      (sum, item) => sum + item.tea.pricePerGram * item.stockCount,
      0,
    );
  }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const inventory = new Inventory();

teaInstances.forEach((tea) => {
  const data = teas.find((t) => t.name === tea.name);
  inventory.add(tea, data.stockCount);
});

console.log("Sencha stock:", inventory.getStock("Sencha")); // 150

inventory.sell("Sencha", 50);
console.log("After selling 50g:", inventory.getStock("Sencha")); // 100

console.log("Low stock (< 50):");
inventory.getLowStock(50).forEach((item) => {
  console.log(`- ${item.tea.name}: ${item.stockCount}g`);
});

console.log(
  "Total inventory value:",
  inventory.getTotalValue().toFixed(2),
  "DKK",
);
