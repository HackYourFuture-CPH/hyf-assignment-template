import { teas } from "./teas.js";
class Tea {
  constructor(name, type, origin, pricePerGram, organic) {
    // validate name must be a non-empty string
    if (!name || typeof name !== "string") {
      throw new Error("Name is required");
    }
    //type must be one of: "green", "black", "herbal", "oolong", "white"
    const validTypes = ["green", "black", "herbal", "oolong", "white"];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid type:${type}`);
    }
    // pricePerGram must be a positive number
    if (typeof pricePerGram !== "number" || pricePerGram <= 0) {
      throw new Error("PricePerGram must be a positive number");
    }
    // Store all properties
    this.name = name;
    this.type = type;
    this.origin = origin;
    this.pricePerGram = pricePerGram;
    this.organic = organic; //boolean
  }
  priceFor(grams) {
    // Return price for given weight
    return this.pricePerGram * grams;
  }
  describe() {
    // Return "Sencha (green) from Japan - 12.00 DKK/100g [organic]"
    // Only include "[organic]" if the tea is organic
    const price100g = this.priceFor(100).toFixed(2);
    const organicLabel = this.organic ? "[organic]" : "";
    return `${this.name} (${this.type}) from ${this.origin} - ${price100g} DKK/100g ${organicLabel}`;
  }

  static fromObject(obj) {
    // Create a Tea from a plain object (like from the data file
    const { name, type, origin, pricePerGram, organic } = obj;
    return new Tea(name, type, origin, pricePerGram, organic);
  }
}

// Test validation:
try {
  new Tea("", "green", "Japan", 0.12, true);
} catch (e) {
  console.log(e.message);
} // "Name is required"

try {
  new Tea("Test", "purple", "Japan", 0.12, true);
} catch (e) {
  console.log(e.message);
} // "Invalid type: purple"

// Test factory method:
const teaInstances = teas.map(Tea.fromObject);
console.log(teaInstances.length); // 20
console.log(teaInstances[0].describe());
// "Sencha (green) from Japan - 12.00 DKK/100g [organic]"
console.log(teaInstances[1].describe());
// "Earl Grey (black) from India - 8.00 DKK/100g"
