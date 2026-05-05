import { teas } from "./teas.js";

import fs from "fs";

function generateInventoryReport(callback) {
  fs.readFile("./inventory-updates.json", "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    const updates = JSON.parse(data);

    const changes = updates.reduce((acc, update) => {
      acc[update.teaId] = (acc[update.teaId] || 0) + update.change;
      return acc;
    }, {});

    let report = "Inventory Report:\n";

    teas.forEach((tea) => {
      const change = changes[tea.id] || 0;
      const newStock = tea.stockCount + change;

      if (change !== 0) {
        report += `- ${tea.name}: was ${tea.stockCount}, change ${change >= 0 ? "+" : ""}${change}, now ${newStock}`;
        if (newStock < 0) report += " (NEGATIVE!)";
        report += "\n";
      }
    });

    callback(null, report);
  });
}

generateInventoryReport((err, report) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(report);
});
