/** @format */

import { teas } from "./teas.js";
//Use reduce to count how many teas of each type exist
const countByType = teas.reduce((counts, tea) => {
  counts[tea.type] = (counts[tea.type] || 0) + 1;
  return counts;
}, {});

console.log(countByType);
