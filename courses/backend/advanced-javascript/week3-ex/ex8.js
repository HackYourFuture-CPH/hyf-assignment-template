const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
function fetchTeaWithTimeout(id, timeoutMs) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeoutMs);

        fetch(`${API_BASE}/teas/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status} ${response.statusText} for tea ID ${id}`);
                }
                return response.json();
            })
            .then((tea) => {
                clearTimeout(timeout);
                resolve(tea);
            })
            .catch((error) => {
                clearTimeout(timeout);
                reject(error);
            });
    });
}

// Test with a generous timeout (should work)
fetchTeaWithTimeout(10, 5000)
    .then((tea) => console.log("Got:", tea.name))
    .catch((err) => console.log("Failed:", err.message));

// Test with a tiny timeout (should fail)
fetchTeaWithTimeout(1, 1)
    .then((tea) => console.log("Got:", tea.name))
    .catch((err) => console.log("Failed:", err.message));