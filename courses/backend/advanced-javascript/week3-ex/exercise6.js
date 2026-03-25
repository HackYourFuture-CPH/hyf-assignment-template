// sign up and order API example
const API_BASE = "http://localhost:3000";
async function signup(email, password) {
    const response = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Signup failed");
    return response.json();
}

// Helper: login and get token
async function getAuthToken() {
    const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "ftsh@gmail.com",
            password: "111111",
        }),
    });

    if (!response.ok) throw new Error("Login failed");
    const data = await response.json();
    return data.token;
}

// Create a new order (POST /orders)
async function createOrder(items) {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ items })
    });
    if (!response.ok) throw new Error("Order creation failed");
    return response.json();
}

// Get all orders (GET /orders)
async function getMyOrders() {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE}/orders`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error("Failed to fetch orders");
    return response.json();
}

// Test (sign up first, then create and list orders):
signup("ftsh@gmail.com", "111111")
    .catch(() => { }) // ignore if already signed up
    .then(() => createOrder([{ teaId: 1, grams: 100 }]))
    .then((order) => console.log("Created order:", order.id))
    .then(() => getMyOrders())
    .then((orders) => console.log("All orders:", orders.length));