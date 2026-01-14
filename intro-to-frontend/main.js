console.log("Script loaded");
const products = getAvailableProducts();

const productList = document.querySelector("#productList");
const searchInput = document.querySelector("#searchInput");
const minPriceInput = document.querySelector("#minPrice");
const maxPriceInput = document.querySelector("#maxPrice");
const sortSelect = document.querySelector("#sortSelect");

function renderProducts(products) {
  productList.innerHTML = "";
  if (products.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No products found.";
    productList.appendChild(li);
    return;
  }
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: $${product.price}<br>
      Rating: ${product.rating}/10
    `;
    productList.appendChild(li);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const searchText = searchInput.value.toLowerCase().trim();
  if (searchText !== "") {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText));
  }

  const minPrice = Number(minPriceInput.value);
  const maxPrice = Number(maxPriceInput.value);
  if (!isNaN(minPrice)) filtered = filtered.filter(p => p.price >= minPrice);
  if (!isNaN(maxPrice)) filtered = filtered.filter(p => p.price <= maxPrice);

  const sortValue = sortSelect.value;
  if (sortValue === "priceAsc") filtered.sort((a,b) => a.price - b.price);
  if (sortValue === "priceDesc") filtered.sort((a,b) => b.price - a.price);
  if (sortValue === "ratingAsc") filtered.sort((a,b) => a.rating - b.rating);
  if (sortValue === "ratingDesc") filtered.sort((a,b) => b.rating - a.rating);

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterAndSortProducts);
minPriceInput.addEventListener("input", filterAndSortProducts);
maxPriceInput.addEventListener("input", filterAndSortProducts);
sortSelect.addEventListener("change", filterAndSortProducts);

renderProducts(products);
