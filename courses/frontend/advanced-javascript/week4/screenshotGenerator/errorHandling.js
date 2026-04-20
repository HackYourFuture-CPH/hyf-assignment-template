//custom error classes
export class AppError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = code;
  }

  toUserMessage() {
    return "Something went wrong. Please try again later.";
  }
}

export class ValidationError extends AppError {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
  toUserMessage() {
    return "Invalid input. Please check the URL and try again.";
  }
}

export class SaveError extends AppError {
  constructor(message, code = 500) {
    super(message, code);
    this.name = "SaveError";
  }

  toUserMessage() {
    if (this.statusCode === 413) {
      return "Could not save the screenshot. Please try again later.";
    }

    if (this.statusCode >= 500) {
      return "Server error. Please try again later.";
    }

    if (this.statusCode >= 400) {
      return "Unable to save screenshot. Please try again.";
    }

    return "Unable to save screenshot. Please try again.";
  }
}
export class ApiError extends AppError {
  constructor(message, code = 500) {
    super(message, code);
    this.name = "ApiError";
  }
  toUserMessage() {
    if (this.statusCode >= 500) {
      return "Server error. Please try again later.";
    } else if (this.statusCode >= 400) {
      return "Client error. Please check your input and try again.";
    }
    return this.message;
  }
}

export class NetworkError extends AppError {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
  toUserMessage() {
    return "No network connection. Please check your connection and try again.";
  }
}
