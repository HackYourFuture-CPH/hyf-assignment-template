import { ValidationError, SaveError } from "./errorHandling.js";

export class UrlValidator {
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

export class SaveValidator {
  static validate(savedUrl, currentScreenshot) {
    const trimmedUrl = savedUrl?.trim() || "";

    // Validate that the input is not empty
    if (!currentScreenshot) {
      throw new SaveError(
        "No screenshot to save. Please capture a screenshot first.",
        400,
      );
    }

    if (!trimmedUrl) {
      throw new SaveError("Please enter a URL to save the screenshot.", 400);
    }

    try {
      new URL(trimmedUrl);
    } catch {
      throw new SaveError("Please enter a valid URL.", 400);
    }

    return trimmedUrl;
  }
}
