console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  
  // your code goes here
  const productsList = document.querySelector("#productsList");

  
  productsList.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");

    const name = document.createElement("h2"); 
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.rating}`;

    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(rating);

    productsList.appendChild(li);
  });
}


renderProducts(products); 
