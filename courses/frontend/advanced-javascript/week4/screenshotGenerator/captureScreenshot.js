import { ApiError, ValidationError, NetworkError } from "./errorHandling.js";
import { UrlValidator } from "./validators.js";
import { Screenshot } from "./screenshot.js";
import { RAPID_API_KEY, RAPID_API_HOST } from "./secret.js";

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

export async function captureScreenshot({
  input,
  error,
  saveButton,
  setCurrentScreenshot,
}) {
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

    const imageUrl = await blobToDataUrl(screenshotBlob);
    console.log("Image URL:", imageUrl);

    const screenshot = new Screenshot(
      null,
      userUrl,
      imageUrl,
      new Date().toISOString(),
    );
    console.log("Current Screenshot:", screenshot);

    setCurrentScreenshot(screenshot);
    saveButton.disabled = false;

    screenshot.renderPreview();
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
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
