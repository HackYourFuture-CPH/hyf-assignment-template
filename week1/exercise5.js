/** @format */

import { teas } from "./teas.js";
//Create a search function for the tea shop
function searchTeas(teas, query) {
  // Return teas where the name contains the query (case-insensitive)
  return teas
    .filter((tea) => tea.name.toLowerCase().includes(query.toLowerCase())) // filter to find teas that match the query
    .map((tea) => tea.name) // map to get the names of the teas
    .sort(); // Sort the names alphabetically
}

console.log(searchTeas(teas, "cha"));
console.log(searchTeas(teas, "earl"));
console.log(searchTeas(teas, "dragon"));
