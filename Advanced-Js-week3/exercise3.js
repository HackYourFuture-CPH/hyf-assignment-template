const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
async function calculateOrderTotal(items) {
  // Fetch all teas from API
  const teas = await fetch(`${API_BASE}/teas`).then((r) => r.json());
  //For each item, find the tea and calculate price
  const prices = items.map(({ teaId, grams }) => {
    const tea = teas.find((t) => t.id === teaId);
    // throw an error if a teaId doesn't exist
    if (!tea) {
      throw new Error(`Tea with ID ${teaId} does not exist`);
    }
    return tea.pricePerGram * grams;
  });
  // Return total price
  return prices.reduce((sum, p) => sum + p, 0);
}

const order = [
  { teaId: 1, grams: 100 },
  { teaId: 3, grams: 50 },
  { teaId: 8, grams: 200 },
];

calculateOrderTotal(order)
  .then((total) => console.log(`Order total: ${total.toFixed(2)} DKK`))
  .catch((err) => console.error("Error:", err.message));
