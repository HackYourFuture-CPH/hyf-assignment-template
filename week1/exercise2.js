/** @format */

import { teas } from "./teas.js";
function inventoryReport(teas) {
  let totalInventoryValue = 0;
  let totalPrice = 0;
  teas.forEach((tea) => {
    totalInventoryValue += tea.pricePerGram * tea.stockCount;
    totalPrice += tea.pricePerGram;
  });
  return {
    totalTeas: teas.length,
    inStock: teas.filter((tea) => tea.inStock === true).length,
    outOfStock: teas.filter((tea) => tea.inStock === false).length,
    totalInventoryValue: totalInventoryValue,
    averagePrice: totalPrice / teas.length,
  };
}
console.log(inventoryReport(teas));
