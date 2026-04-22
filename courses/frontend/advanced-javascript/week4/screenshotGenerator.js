import { RAPID_API_KEY, RAPID_API_HOST } from "./secret.js";

//static on top of all
//static do not use private variables

//default parameters  above constructor
// graduate = fault;
//new + this is done

//ERROR HANDLING

class AppError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }

  toUserMessage() {
    return this.message;
  }
}

class ValidationError extends AppError {
  constructor(message, code = 400) {
    super(message, code);
  }
}

class SaveError extends AppError {
  constructor(message, code = 400) {
    super(message, code);
  }
}

class ApiError extends AppError {
  constructor(message, code = 500) {
    super(message, code);
  }
}

class NetworkError extends AppError {
  constructor(message = "No internet connection. Please try again.", code = 0) {
    super(message, code);
  }
}

class UrlValidator {
  static validate(url) {
    let userUrl = url.trim();

    // Validate that the input is not empty
    if (!userUrl) {
      throw new ValidationError("Please enter a website URL");
    }

    // Validate that the input starts with http:// or https://
    if (!userUrl.startsWith("http://") && !userUrl.startsWith("https://")) {
      userUrl = "https://" + userUrl;
    }

    try {
      new URL(userUrl);
    } catch {
      throw new ValidationError("Please enter a valid URL");
    }
    return userUrl;
  }
}

class SaveURL {
  static validate(savedUrl, currentScreenshot) {
    const trimmedUrl = savedUrl.trim();

    // Validate that the input is not empty
    if (!currentScreenshot) {
      throw new SaveError(
        "No screenshot to save. Please capture a screenshot first.",
        400,
      );
    }

    if (!trimmedUrl) {
      throw new SaveError("Please enter an URL to save the screenshot.", 400);
    }

    try {
      new URL(trimmedUrl);
    } catch {
      throw new SaveError("Please enter a valid URL.", 400);
    }

    return trimmedUrl;
  }
}

class ApiResponseHandler {
  static async validate(response) {
    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API error:", errorBody);
      throw new ApiError(
        "Could not generate screenshot. Please try again.",
        response.status,
      );
    }

    return response;
  }
}

// UI Logic

const input = document.getElementById("input-url");
const captureButton = document.getElementById("capture-screenshot-btn");
const output = document.getElementById("output-screenshot");
const error = document.getElementById("error-message");
const saveButton = document.getElementById("save-screenshot-btn");

// Store current screenshot
let currentScreenshot = null;

class Screenshot {
  constructor(id, url, image, time) {
    this.id = id;
    this.url = url;
    this.image = image;
    this.time = time;
  }

  render() {
    const container = document.getElementById("output-screenshot");

    // clear previous preview (optional)
    container.innerHTML = "";
    const card = document.createElement("div");
    card.className = "screenshot-card";

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = `Screenshot of ${this.url}`;

    const urlText = document.createElement("p");
    urlText.textContent = this.url;

    const timeText = document.createElement("p");
    timeText.textContent = `Captured at: ${new Date(this.time).toLocaleString()}`;

    const visitButton = document.createElement("button");
    visitButton.textContent = "Visit";
    visitButton.addEventListener("click", () => {
      this.visitSavedUrl();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      this.delete();
      card.remove();
    });

    card.appendChild(img);
    card.appendChild(urlText);
    card.appendChild(timeText);
    card.appendChild(visitButton);
    card.appendChild(deleteButton);

    container.appendChild(card);
  }

  saveScreenshot() {}
  deleteScreenshot() {}
  visitSavedUrl() {
    window.open(this.url, "_blank");
  }
}

//Function to capture screenshot and display it

captureButton.addEventListener("click", async () => {
  error.textContent = "";

  try {
    const userUrl = UrlValidator.validate(input.value);
    const apiUrl = `https://${RAPID_API_HOST}/v1/screenshots/image?url=${encodeURIComponent(userUrl)}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    });

    console.log("Status:", response.status);
    console.log("Status text:", response.statusText);

  
    await ApiResponseHandler.validate(response);

    const screenshotBlob = await response.blob();
    console.log("Blob:", screenshotBlob);

    const imageUrl = URL.createObjectURL(screenshotBlob);
    console.log("Image URL:", imageUrl);

    currentScreenshot = new Screenshot(
      null,
      userUrl,
      imageUrl,
      new Date().toISOString(),
    );
    console.log("Current Screenshot:", currentScreenshot);


    
    saveButton.disabled = false;

    currentScreenshot.render();
  } catch (err) {
    if (err instanceof ValidationError) {
      error.textContent = err.toUserMessage();
    } else if (err instanceof ApiError) {
      error.textContent = err.toUserMessage();
    } else if (err instanceof TypeError) {
      error.textContent = new NetworkError().toUserMessage();
    } else {
      error.textContent = "Something went wrong.";
      console.error(err);
    }
  }
});

