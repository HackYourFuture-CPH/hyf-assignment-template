import { SaveError } from "./errorHandling.js";
import { AppError } from "./errorHandling.js";
import { NetworkError } from "./errorHandling.js";
import { SaveValidator } from "./validators.js";
import { Screenshot } from "./screenshot.js";

export async function saveScreenshot({
  currentScreenshot,
  error,
  crudCrudUrl,
}) {
  error.textContent = "";

  try {
    SaveValidator.validate(currentScreenshot?.url, currentScreenshot);

    const response = await fetch(crudCrudUrl, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        url: currentScreenshot.url,
        image: currentScreenshot.image,
        time: currentScreenshot.time,
      }),
    });

    if (!response.ok) {
      throw new SaveError("Could not save screenshot.", response.status);
    }
    const savedData = await response.json();
    const savedScreenshot = new Screenshot(
      savedData._id,
      savedData.url,
      savedData.image,
      savedData.time,
    );
    savedScreenshot.renderSavedCard(crudCrudUrl);
  } catch (err) {
    if (err instanceof AppError) {
      error.textContent = err.toUserMessage();
    } else if (err instanceof TypeError) {
      error.textContent = new NetworkError(
        "Network request failed.",
      ).toUserMessage();
    } else {
      error.textContent = "Could not save screenshot.";
      console.error(err);
    }
  }
}


export async function loadSavedScreenshots({ error, crudCrudUrl }) {
  error.textContent = "";
  try {
    const response = await fetch(crudCrudUrl);

    if (!response.ok) {
      throw new SaveError("Could not load saved screenshots.", response.status);
    }

    const screenshots = await response.json();
    const container = document.getElementById("saved-screenshot-container");
    container.innerHTML = "";

    screenshots.forEach((item) => {
      const screenshot = new Screenshot(
        item._id,
        item.url,
        item.image,
        item.time,
      );
      screenshot.renderSavedCard(crudCrudUrl);
    });
  } catch (err) {
    if (err instanceof AppError) {
      error.textContent = err.toUserMessage();
    } else if (err instanceof TypeError) {
      error.textContent = new NetworkError(
        "Network request failed.",
      ).toUserMessage();
    } else {
      error.textContent = "Could not load saved screenshots.";
      console.error(err);
    }
  }
}
