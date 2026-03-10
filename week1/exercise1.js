/** @format */

import { teas } from "./teas.js";
const result = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i].caffeineLevel !== "none") {
    result.push(teas[i].name.toUpperCase());
  }
}
console.log(result);

//Rewrite the above using filter and map with arrow functions:
const filterTeas = teas.filter((tea) => tea.caffeineLevel !== "none");
const map = filterTeas.map((tea) => tea.name.toUpperCase());
console.log(map);
