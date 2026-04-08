const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
//Fetch all teas from the API and log how many there are.
//fetch(`${API_BASE}/teas`)
//.then((response) => {
//  return response.json(); // response.json() also returns a Promise!
//})
//.then((teas) => {
// console.log(`There are ${teas.length} teas available.`);
//});

async function countTeas() {
    // use await instead of .then()
    const response = await fetch(`${API_BASE}/teas`);
    const teas = await response.json();
    console.log(`There are ${teas.length} teas available.`);
}

countTeas();