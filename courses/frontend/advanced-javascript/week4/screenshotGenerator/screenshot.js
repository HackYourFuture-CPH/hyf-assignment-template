export class Screenshot {
  constructor(id, url, image, time) {
    this.id = id;
    this.url = url;
    this.image = image;
    this.time = time;
  }

  renderPreview() {
    const container = document.getElementById("output-screenshot");

    container.innerHTML = "";

    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = `Screenshot of ${this.url}`;

    const urlText = document.createElement("p");
    urlText.textContent = this.url;

    const timeText = document.createElement("p");
    timeText.textContent = `Captured at: ${new Date(this.time).toLocaleString()}`;

    card.append(img, urlText, timeText);
    container.appendChild(card);
  }

  renderSavedCard(crudCrudUrl) {
    const container = document.getElementById("saved-screenshot-container");
    const card = document.createElement("article");
    card.className = "saved-card";
    const savedImageContainer = document.createElement("div");
    savedImageContainer.className = "saved-card-image";

    if (this.image) {
      const img = document.createElement("img");
      img.src = this.image;
      img.alt = `Screenshot of ${this.url}`;
      savedImageContainer.appendChild(img);
    }
    const content = document.createElement("div");
    content.className = "saved-card-content";

    const urlText = document.createElement("p");
    urlText.className = "saved-card-url";
    urlText.textContent = this.url;

    const timeText = document.createElement("p");
    timeText.className = "saved-card-time";
    timeText.textContent = `Captured at: ${new Date(this.time).toLocaleString()}`;

    const actions = document.createElement("div");
    actions.className = "saved-card-actions";

    const visitButton = document.createElement("button");
    visitButton.type = "button";
    visitButton.textContent = "Visit";
    visitButton.className = "visit-button";

    visitButton.addEventListener("click", () => {
      this.visitSavedUrl();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", async () => {
      await this.delete(crudCrudUrl, card);
    });

    actions.append(visitButton, deleteButton);
    content.append(urlText, timeText, actions);

    card.append(savedImageContainer, content);
    container.appendChild(card);
  }

  visitSavedUrl() {
    window.open(this.url, "_blank");
  }

  async delete(crudCrudUrl, cardElement) {
    try {
      const response = await fetch(`${crudCrudUrl}/${this.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      cardElement.remove();
    } catch (error) {
      console.error("Could not delete screenshot:", error);
    }
  }
}
