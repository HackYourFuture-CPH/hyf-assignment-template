const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
fetch(`${API_BASE}/teas/1`)
    .then((response) => response.json())
    .then((tea) => {
        console.log("Tea:", tea.name);


        return fetch(`${API_BASE}/inventory`);// Return a new fetch to chain it
    })
    .then((response) => response.json())
    .then((inventory) => {

        const teaStock = inventory.find((item) => item.teaId === 1);
        if (teaStock) {
            console.log(`Stock count for ${tea.name}: ${teaStock.stock}`);
        } else {
            console.log(`No stock information found for ${tea.name}`);
        }
    })
    .catch((error) => console.error("Error:", error.message));