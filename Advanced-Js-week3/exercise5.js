const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
//process order
async function processOrder(items) {
  console.log("Processing order...\n");

  // Validate items exist
  console.log("1. validating items...");
  const teas = await fetch(`${API_BASE}/teas`).then((r) => r.json());
  for (const { teaId } of items) {
    // If any don't exist, throw error
    if (!teas.some((t) => t.id === teaId)) {
      throw new Error(`Tea with Id${teaId} does not exist`);
    }
  }

  // Check stock
  async function checkOrderStock(items) {
    const [inventory, teas] = await Promise.all([
      fetch(`${API_BASE}/inventory`).then((r) => r.json()),
      fetch(`${API_BASE}/teas`).then((r) => r.json()),
    ]);
    const shortages = [];
    for (const { teaId, grams } of items) {
      const stockEntry = inventory.find((i) => i.teaId === teaId);
      const tea = teas.find((t) => t.id === teaId);
      const available = stockEntry?.stockCount ?? 0;
      if (available < grams) {
        shortages.push({
          teaId,
          name: tea?.name ?? "Unknown tea",
          needed: grams,
          available,
        });
      }
    }
    return {
      inStock: shortages.length === 0,
      shortages,
    };
  }
  console.log("2. Checking stock...");
  const stockResult = await checkOrderStock(items);
  if (!stockResult.inStock) {
    console.log("Stock shortages:", stockResult.shortages);
    throw new Error("Items out of stock");
  }

  // Calculate total
  async function calculateOrderTotal(items) {
    const teas = await fetch(`${API_BASE}/teas`).then((r) => r.json());
    const prices = items.map(({ teaId, grams }) => {
      const tea = teas.find((t) => t.id === teaId);
      if (!tea) throw new Error(`Tea with ID${teaId} does not exist`);
      return tea.pricePerGram * grams;
    });
    return prices.reduce((sum, p) => sum + p, 0);
  }
  console.log("3. Calculating total...");
  const total = await calculateOrderTotal(items);

  //  Create order summary
  console.log("4. Creating summary...\n");

  return {
    items: items.length,
    total,
    status: "ready",
  };
}

const myOrder = [
  { teaId: 10, grams: 50 },
  { teaId: 20, grams: 50 },
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
