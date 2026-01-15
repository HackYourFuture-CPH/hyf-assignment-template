console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector(".product-list");

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let listItem = document.createElement("li");

    const ratingClass = products[i].rating < 5 ? "rating-low" : "rating-high";

    listItem.innerHTML = `
  <li class="product-list-item">
  <div class="product-card  ${ratingClass}">
  <h3 class="product-title">${products[i].name}</h3>
  <p class="product-rating">Rating: ${products[i].rating}</p>
  <p class="product-price">Price: ${products[i].price}</p>
  </div>
  </li>
  `;

    productList.append(listItem);
  }
}

renderProducts(products);
