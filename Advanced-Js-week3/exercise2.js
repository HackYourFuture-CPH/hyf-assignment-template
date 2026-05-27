const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
async function getTeaDetails(id) {
  // Fetch tea and inventory in PARALLEL using Promise.all
  const [tea, inventory] = await Promise.all([
    fetch(`${API_BASE}/teas/${id}`).then((r) => r.json()),
    fetch(`${API_BASE}/inventory`).then((r) => r.json()),
  ]);
  //Find the inventory entry for this tea
  const stockEntry = inventory.find((item) => item.teaId === id);
  // Return combined object: { ...tea, stock: number }
  return {
    ...tea,
    stock: stockEntry?.stockCount ?? 0,
  };
}
// Test it:
getTeaDetails(31).then((tea) => {
  console.log(`${tea.name} (${tea.origin})`);
  console.log(`Price: ${tea.pricePerGram} DKK/gram`);
  console.log(`Stock: ${tea.stock} grams`);
  console.log(`Value: ${(tea.pricePerGram * tea.stock).toFixed(2)} DKK`);
});
