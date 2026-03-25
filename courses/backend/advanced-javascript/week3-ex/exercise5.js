const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";


// Check if all items are in stock
async function checkOrderStock(items) {
    const [invRes, teaRes] = await Promise.all([
        fetch(`${API_BASE}/inventory`),
        fetch(`${API_BASE}/teas`)
    ]);
    const inventory = await invRes.json();
    const teas = await teaRes.json();
    const shortages = [];
    for (const item of items) {
        const inv = inventory.find(i => i.teaId === item.teaId);
        const tea = teas.find(t => t.id === item.teaId);
        if (!inv || !tea) {
            shortages.push({
                teaId: item.teaId,
                name: tea ? tea.name : "Unknown tea",
                needed: item.grams,
                available: inv ? inv.stock : 0
            });
            continue;
        }
        if (inv.stock < item.grams) {
            shortages.push({
                teaId: item.teaId,
                name: tea.name,
                needed: item.grams,
                available: inv.stock
            });
        }
    }
    return {
        inStock: shortages.length === 0,
        shortages
    };
}


// Calculate the total price for the order
async function calculateOrderTotal(items) {
    const response = await fetch(`${API_BASE}/teas`);
    const teas = await response.json();
    let total = 0;
    for (const item of items) {
        const tea = teas.find(t => t.id === item.teaId);
        if (!tea) {
            throw new Error(`Tea with ID ${item.teaId} not found`);
        }
        total += tea.pricePerGram * item.grams;
    }
    return total;
}

// Validate that all tea IDs in the order exist
async function validateItems(items) {
    const res = await fetch(`${API_BASE}/teas`);
    const teas = await res.json();
    const validIds = new Set(teas.map(t => t.id));
    for (const item of items) {
        if (!validIds.has(item.teaId)) {
            throw new Error(`Tea with ID ${item.teaId} does not exist`);
        }
    }
}

// Main order processing function
async function processOrder(items) {
    console.log("Processing order...\n");
    // Step 1: Validate items exist
    console.log("1. Validating items...");
    await validateItems(items);

    // Step 2: Check stock
    console.log("2. Checking stock...");
    const stockResult = await checkOrderStock(items);
    if (!stockResult.inStock) {
        throw new Error("Items out of stock");
    }

    // Step 3: Calculate total
    console.log("3. Calculating total...");
    const total = await calculateOrderTotal(items);

    // Step 4: Create order summary
    console.log("4. Creating summary...\n");
    return {
        items: items.length,
        total,
        status: "ready",
    };
}


// Example usage
const myOrder = [
    { teaId: 1, grams: 50 },
    { teaId: 5, grams: 100 },
];

processOrder(myOrder)
    .then((result) => {
        console.log("Order ready!");
        console.log(`Items: ${result.items}`);
        console.log(`Total: ${result.total.toFixed(2)} DKK`);
    })
    .catch((err) => {
        console.error("Order failed:", err.message);
    });