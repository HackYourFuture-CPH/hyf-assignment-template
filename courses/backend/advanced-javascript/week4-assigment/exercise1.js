import { teas } from "./teas.js";
class Inventory {
    constructor() {
        // Store a Map of tea ID → { tea, stockCount }
        this.items = new Map();
    }

    add(tea, stockCount) {
        // Add a tea to inventory
        this.items.set(tea.id, { tea, stockCount });
    }

    sell(teaName, grams) {
        // Find the tea by name
        for (const [id, item] of this.items.entries()) {
            if (item.tea.name === teaName) {
                if (item.stockCount < grams) {
                    throw new Error(`Not enough stock for ${teaName}`);
                }
                item.stockCount -= grams;
                this.items.set(id, item);
                return;
            }
        }
        throw new Error(`Tea not found: ${teaName}`);
    }

    restock(teaName, grams) {
        // Increase stock
        for (const [id, item] of this.items.entries()) {
            if (item.tea.name === teaName) {
                item.stockCount += grams;
                this.items.set(id, item);
                return;
            }
        }
        throw new Error(`Tea not found: ${teaName}`);
    }

    getStock(teaName) {
        for (const item of this.items.values()) {
            if (item.tea.name === teaName) {
                return item.stockCount;
            }
        }
        throw new Error(`Tea not found: ${teaName}`);
    }

    getLowStock(threshold) {
        // Return array of { tea, stockCount } where stock < threshold
        // Use .filter()
    }

    getTotalValue() {
        // Sum of (pricePerGram * stockCount) for all items
        // Use .reduce()
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