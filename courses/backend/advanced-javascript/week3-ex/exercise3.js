const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";


async function calculateOrderTotal(items) {

    const response = await fetch(`${API_BASE}/teas`);
    const teas = await response.json();

    let total = 0;

    for (const item of items) {
        const tea = teas.find(t => t.id === item.teaId);


        if (!tea) {
            throw new Error(`Tea with ID ${item.teaId} not found`);
        }

        const itemTotal = tea.pricePerGram * item.grams;

        total += itemTotal;
    }



    return total;
}
const order = [
    { teaId: 1, grams: 200 },
    { teaId: 3, grams: 50 },
    { teaId: 8, grams: 200 },
];

calculateOrderTotal(order)
    .then((total) => console.log(`Order total: ${total.toFixed(2)} DKK`))
    .catch((err) => console.error("Error:", err.message));