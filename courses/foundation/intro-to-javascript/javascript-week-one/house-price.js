let peterActualCost = 2500000;
let peterHouseWidth = 8;
let peterHouseDepth = 10;
let peterHouseHeight = 10;
let peterGardenSizeInM2 = 100;
// Calculate volume
let peterVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;

// Calculate house price using the formula
let peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

// Compare 
if (peterHousePrice > peterActualCost) {
    console.log("Peter is paying too much. House price: " + peterHousePrice + ", Actual price: " + peterActualCost);

}else if (peterHousePrice < peterActualCost) {
    console.log("Peter is paying too little for the house.");

}
let juliaActualCost = 1000000;
let juliaHouseWidth = 5;
let juliaHouseDepth = 11;
let juliaHouseHeight = 8;
let juliaGardenSizeInM2 = 70;

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
