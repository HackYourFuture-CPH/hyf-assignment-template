console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  // your code goes here
  const productList = document.getElementById("productList");
  for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement("li");

    const ratingClass =
      products[i].rating < 5 ? "rating-low" : "rating-high";

    listItem.className = "product-list-item";

    listItem.innerHTML = `
      <div class="product-card ${ratingClass}">
        <h3 class="product-title">${products[i].name}</h3>
        <p class="product-rating">Rating: ${products[i].rating}</p>
        <p class="product-price">Price: ${products[i].price}</p>
      </div>
    `;

    productList.appendChild(listItem);
  }

}
renderProducts(products); 
