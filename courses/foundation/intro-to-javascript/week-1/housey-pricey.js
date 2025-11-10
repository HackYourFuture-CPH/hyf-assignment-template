const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;

const peterGardenSizeInM2 = 100;
const peterHouseVolume = peterHouseWidth * peterHouseDepth * peterHouseHeight;

const peterHousePrice =
  peterHouseVolume * 2.5 * 1000 + peterGardenSizeInM2 * 300;
console.log(peterHousePrice);
//Peters house is expensive

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 10;

const juliaGardenSizeInM2 = 70;
const juliaHouseVolume = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

const juliaHousePrice =
  juliaHouseVolume * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log(juliaHousePrice);
//Julias house is cheap
