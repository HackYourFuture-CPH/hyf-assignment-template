const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";


async function checkOrderStock(items) {
    // Fetch all inventory and teas concurrently
    const [invRes, teaRes] = await Promise.all([
        fetch(`${API_BASE}/inventory`),
        fetch(`${API_BASE}/teas`)
    ]);

    const inventory = await invRes.json();
    const teas = await teaRes.json();

    const shortages = [];

    items.forEach(item => {
        const inv = inventory.find(i => i.teaId === item.teaId);
        const tea = teas.find(t => t.id === item.teaId);

        // Missing tea or inventory entry
        if (!inv || !tea) {
            shortages.push({
                teaId: item.teaId,
                name: tea ? tea.name : "Unknown tea",
                needed: item.grams,
                available: inv ? inv.stock : 0
            });
            return;
        }

        // Not enough stock
        if (inv.stock < item.grams) {
            shortages.push({
                teaId: item.teaId,
                name: tea.name,
                needed: item.grams,
                available: inv.stock
            });
        }
    });

    // Return result object
    return {
        inStock: shortages.length === 0,
        shortages
    };
}



const largeOrder = [
    { teaId: 1, grams: 100 },
    { teaId: 2, grams: 1000 }, // might be out of stock
    { teaId: 3, grams: 9999 }, // definitely out of stock
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