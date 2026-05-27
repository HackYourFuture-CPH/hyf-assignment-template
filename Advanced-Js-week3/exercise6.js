const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
//  sign up (only needed once)
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
      email: "cat33@yahoo.com",
      password: "343536",
    }),
  });

  if (!response.ok) throw new Error("Login failed");
  const data = await response.json();
  return data.token;
}
//check order stock
async function checkOrderStock(items) {
  const [inventory, teas] = await Promise.all([
    fetch(`${API_BASE}/inventory`).then((r) => r.json()),
    fetch(`${API_BASE}/teas`).then((r) => r.json()),
  ]);
  const shortages = [];
  for (const { teaId, grams } of items) {
    const stockEntry = inventory.find((i) => i.teaId === teaId);
    const tea = teas.find((t) => t.id === teaId);
    const available = stockEntry?.stockCount ?? 0;
    if (available < grams) {
      shortages.push({
        teaId,
        name: tea?.name ?? "Unknown tea",
        needed: grams,
        available,
      });
    }
  }
  return {
    inStock: shortages.length === 0,
    shortages,
  };
}

// Create a new order (POST /orders)
async function createOrder(items) {
  const token = await getAuthToken();
  //check stock before sending to API
  const stock = await checkOrderStock(items);
  if (!stock.inStock) {
    console.log("Stock shortages:", stock.shortages);
    throw new Error(" Order cannot be created: items out of stock");
  }
  // POST to /orders with:
  const response = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }, // Authorization header with token
    body: JSON.stringify({ items }), // Body with items array
  });
  if (!response.ok) throw new Error("Order creation failed");
  return response.json(); //Return the created order
}

// Get all orders (GET /orders)
async function getMyOrders() {
  const token = await getAuthToken();
  const response = await fetch(`${API_BASE}/orders`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }, // GET /orders with Authorization header
  });
  if (!response.ok) throw new Error("Fetching orders failed");
  return response.json(); // Return array of orders
}

// Test (sign up first, then create and list orders):
signup("cat33@yahoo.com", "343536")
  .catch(() => {}) // ignore if already signed up
  .then(() => createOrder([{ teaId: 50, grams: 100 }]))
  .then((order) => console.log("Created order:", order.id))
  .then(() => getMyOrders())
  .then((orders) => console.log("All orders:", orders.length))
  .catch((err) => console.error("Error:", err.message));
