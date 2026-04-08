import { teas } from "../data/teas.js";
class Tea {
    constructor(name, type, origin, pricePerGram, organic) {
        this.name = name;
        this.type = type;
        this.origin = origin;
        this.pricePerGram = pricePerGram;
        this.organic = organic;
        // Validate:
        // - name must be a non-empty string
        // - type must be one of: "green", "black", "herbal", "oolong", "white"
        // - pricePerGram must be a positive number
        // Store all properties
    }

    priceFor(grams) {
        // Return price for given weight
    }

    describe() {
        // Return "Sencha (green) from Japan - 12.00 DKK/100g [organic]"
        // Only include "[organic]" if the tea is organic
    }

    static fromObject(obj) {
        // Create a Tea from a plain object (like from the data file)
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