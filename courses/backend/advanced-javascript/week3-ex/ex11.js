const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";



async function getTeaWithStock(id) {
    try {
        const response = await fetch(`${API_BASE}/teas/${id}`);
        const tea = await response.json();
        console.log("Tea:", tea.name);

        const  = await fetch(`${API_BASE}/inventory`);
        const inventory = await inventoryResponse.json();

        const teaStock = inventory.find(item => item.teaId === id);
        console.log("pricePerGram:", teaStock ? teaStock.pricePerGram : 0);
    } catch (error) {
        console.error("Failed:", error.message);
        return null;
    }
}

// Test with valid ID
getTeaWithStock(1);

// Test with invalid ID
getTeaWithStock(5);

