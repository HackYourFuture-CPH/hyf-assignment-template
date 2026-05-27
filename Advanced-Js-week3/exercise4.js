const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
async function checkOrderStock(items) {
  // Fetch inventory and tea from API
  const [inventory, teas] = await Promise.all([
    fetch(`${API_BASE}/inventory`).then((r) => r.json()),
    fetch(`${API_BASE}/teas`).then((r) => r.json()),
  ]);
  const shortages = [];
  // Check if each item has enough stock
  for (const { teaId, grams } of items) {
    const stockEntry = inventory.find((item) => item.teaId === teaId);
    const tea = teas.find((t) => t.id === teaId);
    const available = stockEntry?.stockCount ?? 0;
    if (available < grams) {
      shortages.push({
        name: tea?.name ?? "Unknown tea",
        needed: grams,
        available,
      });
    }
  }
  //  Return { inStock: boolean, shortages: [...] }
  return {
    inStock: shortages.length === 0,
    shortages,
  };
}

const largeOrder = [
  { teaId: 1, grams: 100 },
  { teaId: 2, grams: 500 },
  { teaId: 3, grams: 9999 },
];

checkOrderStock(largeOrder).then((result) => {
  if (result.inStock) {
    console.log("All items in stock!");
  } else {
    console.log("Shortages:");
    result.shortages.forEach((s) => {
      console.log(`- ${s.name}: need ${s.needed}, have ${s.available}`);
    });
  }
});
