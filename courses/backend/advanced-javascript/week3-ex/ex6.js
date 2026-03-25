const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
fetch(`${API_BASE}/teas`)
    .then((response) => response.json())
    .then((teas) => {
        // Filter to Japanese teas
        const japaneseTeas = teas.filter((tea) => tea.origin === "Japan");
        // Log each one's name and price
        japaneseTeas.forEach((tea) => {
            if (typeof tea.stock !== "number") {
                throw new Error("Parameter is not a number!");
            }
            console.log(`Name: ${tea.name}, Price: $${tea.pricePerGram} per gram, Origin: ${tea.origin} , Stock: ${tea.stock}, Rating : ${tea.rating}`);
        });
    })
    .catch((error) => {
        console.log("Something went wrong:");
        console.error(error);
    });
