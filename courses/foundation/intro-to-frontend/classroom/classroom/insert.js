// Function to create and append an image
function appendImage(imageUrl, elementToAppendImageTo) {
  // 1. Create an img element
  const img = document.createElement("img");

  // 2. Set the src attribute to the imageUrl parameter
  img.src = imageUrl;

  // 3. Optional: set width so it looks nice
  img.style.width = "300px";

  // 4. Append the img to the element passed in
  elementToAppendImageTo.appendChild(img);
}

// Example usage: append an image to the body
appendImage("https://picsum.photos/536/354", document.querySelector("body"));
