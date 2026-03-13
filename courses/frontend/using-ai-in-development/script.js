
document.getElementById("colorButton").onclick = function () {
        const randomBg =
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
        document.body.style.background = randomBg;

        const randomText =
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
        this.style.color = randomText;
         ensureContrast(this, randomBg);
      };

      // Helper function to convert hex color to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Helper function to convert RGB string to array
function rgbStringToArray(rgbString) {
  return rgbString.match(/\d+/g).map(Number);
}

// Function to ensure sufficient contrast
function ensureContrast(button, bgColor) {
  const textColor = window.getComputedStyle(button).color;
  const bgRgb = hexToRgb(bgColor);
  const textRgb = rgbStringToArray(textColor);

  const bgLuminance = getLuminance(bgRgb[0], bgRgb[1], bgRgb[2]);
  const textLuminance = getLuminance(textRgb[0], textRgb[1], textRgb[2]);

  const contrastRatio = getContrastRatio(bgLuminance, textLuminance);

  // If contrast ratio is less than 4.5:1, adjust text color
  if (contrastRatio < 4.5) {
    button.style.color = bgLuminance > 0.5 ? "black" : "white";
  }
}

