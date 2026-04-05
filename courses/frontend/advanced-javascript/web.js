class ValidationError extends Error {
  toUserMessage() {
    return "Please enter a valid URL.";
  }
}

class ApiError extends Error {
  toUserMessage() {
    return "There was a problem contacting the server";
  }
}

class Screenshot {
  constructor(id, url, imageUrl) {
    this.id = id;
    this.url = url;
    this.imageUrl = imageUrl;
  }
  render() {
    const card = document.createElement("div");
    card.classList.add("screenshot-card");

    card.innerHTML = `
            <img src="${this.imageUrl}" alt="Screenshot">
            <p>${this.url}</p>
            <button class="delete-btn" data-id="${this.id}">Delete</button>`;

    return card;
  }
}

class App {
  constructor() {
    this.previewImageUrl = null;

    const container = document.getElementById("savedScreenshots");
    container.addEventListener("click", (e) => {
      if (e.target.matches(".delete-btn")) {
        this.deleteScreenshot(e.target.dataset.id);
      }
    });
  }
  async generateScreenshot() {
    try {
      let url = document.getElementById("url-input").value.trim();

      if (!url) {
        throw new ValidationError("URL is required");
      }
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }

      const apiUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080`;

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": SECRET_API_KEY,

          "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new ApiError("Screenshot API failed");
      }

      const text = await response.json();
      console.log("Raw API text:", text);

      const data = await response.json();
      console.log("Parsed API response:", data);

      const screenshotUrl = data.screenshotUrl;

      if (!screenshotUrl) {
        throw new ApiError("API did not return a screenshot URL");
      }

      document.getElementById("preview").src = screenshotUrl;
      document.getElementById("preview").style.display = "block";

      document.getElementById("save-btn").disabled = false;
      document.getElementById("save-btn").style.display = "inline-block";

      this.previewImageUrl = screenshotUrl;
    } catch (err) {
      if (err instanceof ValidationError) {
        alert(err.toUserMessage());
      } else if (err instanceof ApiError) {
        alert(err.toUserMessage());
      } else {
        alert("Unexpected error while generating screenshot.");
      }
    }
  }
  async saveScreenshot() {
    console.log("saveScreenshot() running...");
    const endpoint = CRUDCRUD_ID;
    console.log("POSTing to:", endpoint);
    try {
      if (!this.previewImageUrl) {
        throw new ValidationError("Generate a screenshot before saving");
      }

      const url = document.getElementById("url-input").value.trim();
      if (!url) {
        throw new ValidationError("Please enter a website URL.");
      }

      const screenshotData = {
        url: url,
        imageUrl: this.previewImageUrl,
      };

      console.log("Sending data:", screenshotData);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(screenshotData),
      });

      if (!response.ok) {
        throw new ApiError("Failed to save screenshot");
      }

      alert("Screenshot saved!");
    } catch (err) {
      if (err instanceof ValidationError) {
        alert(err.toUserMessage());
      } else if (err instanceof ApiError) {
        alert(err.toUserMessage());
      } else {
        alert("Unexpected error while saving screenshot.");
      }
    }
    await this.loadScreenshots();
  }
  async loadScreenshots() {
    console.log("loadScreenshots() running...");

    const endpoint = CRUDCRUD_ID;

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new ApiError("Failed to load saved screenshots");
      }

      const data = await response.json();
      console.log("Loaded screenshots:", data);

      const container = document.getElementById("savedScreenshots");
      if (!container) {
        console.error("Missing #savedScreenshots container in HTML");
        return;
      }

      container.innerHTML = "";

      data.forEach((item) => {
        const screenshot = new Screenshot(item._id, item.url, item.imageUrl);
        const card = screenshot.render();
        container.appendChild(card);
      });
    } catch (err) {
      if (err instanceof ApiError) {
        alert(err.toUserMessage());
      } else {
        console.error(err);
        alert("Unexpected error while loading saved screenshots.");
      }
    }
  }

  async deleteScreenshot(id) {
    console.log("Deleting screenshot:", id);

    const endpoint = `CRUDCRUD_ID/${id}`;

    try {
      const response = await fetch(endpoint, { method: "DELETE" });

      if (!response.ok) {
        throw new ApiError("Failed to delete screenshot");
      }

      await this.loadScreenshots(); // refresh UI
    } catch (err) {
      if (err instanceof ApiError) {
        alert(err.toUserMessage());
      } else {
        console.error(err);
        alert("Unexpected error while deleting screenshot.");
      }
    }
  }
}

const app = new App();

document.getElementById("generate-btn").onclick = () =>
  app.generateScreenshot();
document.getElementById("save-btn").onclick = () => app.saveScreenshot();

app.loadScreenshots();

window.addEventListener("DOMContentLoaded", () => {
  app.loadScreenshots();
});
