/** @format */

import { teas } from "./teas.js";
function lowStockAlert(teas) {
  // Filter teas with stockCount less than 50
  const lowStockTeas = teas
    .filter((tea) => tea.stockCount < 50)
    // Return array of objects with name and stockCount
    .map((tea) => ({ name: tea.name, stockCount: tea.stockCount }))
    // sorted by stockCount (lowest first)
    .sort((a, b) => a.stockCount - b.stockCount);
  return lowStockTeas;
}

console.log(lowStockAlert(teas));
