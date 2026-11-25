console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const title = document.querySelector("h1");
title.innerHTML = "HYF Bay";
title.appendChild(document.createElement("hr"));

const description = document.querySelector("h2");
description.innerHTML =
  "Welcome to the HYF Bay, your one-stop shop for all things tech! Browse our selection of products and find the perfect item for your needs.";

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const ul = document.querySelector("ul");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rating: ${product.rating}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
    `;
    ul.appendChild(li);
  });
}

renderProducts(products);
