const peterActualCost = 2500000;
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterGardenSizeInM2 = 100;

// Calculate volume
const peterVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;

// Calculate house price using the formula
const peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

// Compare 
if (peterHousePrice < peterActualCost) {
    console.log("Peter is paying too much. House price: " + peterHousePrice + ", Actual price: " + peterActualCost);

}else if (peterHousePrice > peterActualCost) {
    console.log("Peter is paying too little for the house.");

}
const juliaActualCost = 1000000;
const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSizeInM2 = 70;

// calculate volume
let juliaVolumeInMeters = juliaHouseDepth * juliaHouseWidth * juliaHouseHeight;

// calculate house price using the formula
let juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
// Compare 
if (juliaHousePrice > juliaActualCost) {
    console.log("Julia is paying too much for the house. House price: " + juliaHousePrice + ", Actual price: " + juliaActualCost);
} else if (juliaHousePrice < juliaActualCost) {
    console.log("Julia is paying too little for the house.");
} 
