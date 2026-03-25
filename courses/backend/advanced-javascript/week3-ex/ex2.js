const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
fetch(`${API_BASE}/teas/3`)
    .then((response) => {
        return response.json(); // response.json() also returns a Promise!
    })
    .then((tea) => {
        console.log(`Tea 3 is ${tea.name} and costs $${tea.pricePerGram} per gram.`);
    });
