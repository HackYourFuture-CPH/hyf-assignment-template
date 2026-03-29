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
}

class OrderItem {
    constructor(tea, grams) {
        this.tea = tea;
        this.grams = grams;

        // store the tea instance and grams
    }

    lineTotal() {
        // use the tea's priceFor method
        return this.tea.priceFor(this.grams);
    }
}

const sencha = new Tea("Sencha", "green", "Japan", 0.52, true);
const item = new OrderItem(sencha, 600);

console.log(item.tea.name); // "Sencha"
console.log(item.grams); // 600
console.log(item.lineTotal()); // 312