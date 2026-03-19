const createBtn = document.getElementById("createBtn");
const createContainer = document.getElementById("createContainer");
createBtn.addEventListener("click", () => {
  // Create element
  const newParagraph = document.createElement("p");
  // Add text
  newParagraph.textContent = "This element was created with JavaScript";
  newParagraph.style.color = "red";
  createContainer.appendChild(newParagraph);
});
