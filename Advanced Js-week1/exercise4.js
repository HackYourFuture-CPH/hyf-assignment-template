/** @format */

import { teas } from "./teas.js";
//Create a function that groups teas by their origin country
function teasByOrigin(teas) {
  const groupedTeas = {};
  teas.forEach((tea) => {
    if (!groupedTeas[tea.origin]) groupedTeas[tea.origin] = [];
    groupedTeas[tea.origin].push(tea.name);
  });
  return groupedTeas;
}
console.log(teasByOrigin(teas));
