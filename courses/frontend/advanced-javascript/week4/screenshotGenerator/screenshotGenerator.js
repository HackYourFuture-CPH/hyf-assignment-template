import { captureScreenshot } from "./captureScreenshot.js";
import { saveScreenshot, loadSavedScreenshots } from "./saveScreenshot.js";
import { CRUDCRUD_RESOURCE_URL } from "./secret.js";

const input = document.getElementById("input-url");
const captureButton = document.getElementById("capture-screenshot-btn");
const error = document.getElementById("error-message");
const saveButton = document.getElementById("save-screenshot-btn");

let currentScreenshot = null;

captureButton.addEventListener("click", async () => {
  await captureScreenshot({
    input,
    error,
    saveButton,
    setCurrentScreenshot: (screenshot) => {
      currentScreenshot = screenshot;
    },
  });
});

saveButton.addEventListener("click", async () => {
  await saveScreenshot({
    currentScreenshot,
    error,
    crudCrudUrl: CRUDCRUD_RESOURCE_URL,
  });
});

loadSavedScreenshots({
  error,
  crudCrudUrl: CRUDCRUD_RESOURCE_URL,
});
