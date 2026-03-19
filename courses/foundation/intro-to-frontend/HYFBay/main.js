console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const productsList = document.querySelector("#products-list");

  products.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: ${product.price}<br>
      Rating: ${product.rating}
    `;

    productsList.appendChild(li);
  });
}

renderProducts(products);


