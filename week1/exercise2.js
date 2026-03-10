/** @format */

import { teas } from "./teas.js";
function inventoryReport(teas) {
  const inventoryValues = teas.map((tea) => tea.pricePerGram * tea.stockCount); //map each tea to its inventory values
  let totalInventoryValue = 0;
  inventoryValues.forEach((value) => (totalInventoryValue += value)); //sum of the inventory values
  const prices = teas.map((tea) => tea.pricePerGram); //map each tea to its price per gram
  let totalPrice = 0;
  prices.forEach((price) => (totalPrice += price)); //sum all the prices
  return {
    totalTeas: teas.length,
    inStock: teas.filter((tea) => tea.inStock === true).length,
    outOfStock: teas.filter((tea) => tea.inStock === false).length,
    totalInventoryValue: totalInventoryValue,
    averagePrice: totalPrice / teas.length,
  };
}
console.log(inventoryReport(teas));
