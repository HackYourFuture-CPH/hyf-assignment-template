/** @format */

import { teas } from "./teas.js";
//Calculate the total value of all tea inventory using reduce
function totalInventoryValue(teas) {
  const totalValue = teas.reduce((sum, tea) => {
    return sum + tea.pricePerGram * tea.stockCount;
  }, 0);
  return totalValue;
}
console.log(`"Total inventory value:" ${totalInventoryValue(teas)}`);
