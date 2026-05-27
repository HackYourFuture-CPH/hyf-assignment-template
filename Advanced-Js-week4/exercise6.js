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
    if (typeof this.tea.priceFor === "function") {
      return this.tea.priceFor(this.grams);
    }
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
// PremiumTea extends Tea
class PremiumTea extends Tea {
  constructor(name, type, origin, pricePerGram, organic, grade) {
    // Call super(), store grade
    super(name, type, origin, pricePerGram, organic);
    // Validate grade is "A", "B", or "C"
    if (!["A", "B", "C"].includes(grade)) {
      throw new Error("Grade must be A, B, or C ");
    }
    this.grade = grade;
  }

  priceFor(grams) {
    // Override: A = 50% markup, B = 25%, C = 10%
    const base = this.pricePerGram * grams;
    let markup = 1;
    if (this.grade === "A") markup = 1.5;
    else if (this.grade === "B") markup = 1.25;
    else if (this.grade === "C") markup = 1.1;
    return base * markup;
  }

  describe() {
    // Override: include [Grade A] in description
    const price100g = this.priceFor(100).toFixed(2);
    return `${this.name} [Grade ${this.grade}](${this.type}) from ${this.origin}-${price100g} DKK/100g`;
  }

  static fromTea(tea, grade) {
    // Create a PremiumTea from an existing Tea instance
    return new PremiumTea(
      tea.name,
      tea.type,
      tea.origin,
      tea.pricePerGram,
      tea.organic,
      grade,
    );
  }
}

// 2. ExpressOrder extends Order
class ExpressOrder extends Order {
  constructor(expressFee) {
    // Call super(), store express fee (default 25 DKK)
    super();
    this.expressFee = expressFee;
  }

  getTotal() {
    // Override: add express fee to parent's total
    return super.getTotal() + this.expressFee;
  }

  getSummary() {
    // Override: include express fee line in summary
    const base = super.getSummary();
    return `${base}
    Express fee:${this.expressFee.toFixed(2)} DKK
    Total with express:${this.getTotal().toFixed(2)} DKK`;
  }
}

// Test PremiumTea:
const gyokuro = new PremiumTea("Gyokuro", "green", "Japan", 0.56, false, "A");
console.log(gyokuro.describe());
// "Gyokuro [Grade A] (green) from Japan - 84.00 DKK/100g"
console.log(gyokuro.priceFor(100)); // 84

const upgraded = PremiumTea.fromTea(teas.map(Tea.fromObject)[0], "B");
console.log(upgraded.describe());

// Test ExpressOrder:
const express = new ExpressOrder(25);
express.addItem(new OrderItem(gyokuro, 100));
console.log(express.getSummary());
// Should show items + express fee + total
console.log(express.getTotal()); // 84 + 25 = 109
