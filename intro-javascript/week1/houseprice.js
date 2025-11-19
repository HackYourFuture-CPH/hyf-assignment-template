const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGarden = 100;
const peterActualPrice = 2500000;

const peterVolume = peterWidth * peterDepth * peterHeight;

// Calculate house price using formula
const peterEstimatedPrice = peterVolume * 2.5 * 1000 + peterGarden * 300;

if (peterActualPrice > peterEstimatedPrice) {
  console.log("Peter is paying too much!");
} else if (peterActualPrice < peterEstimatedPrice) {
  console.log("Peter is paying too little!");
} else {
  console.log("Peter is paying the right amount!");
}
const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGarden = 70;
const juliaActualPrice = 1000000;

const juliaVolume = juliaWidth * juliaDepth * juliaHeight;

const juliaEstimatedPrice = juliaVolume * 2.5 * 1000 + juliaGarden * 300;

if (juliaActualPrice > juliaEstimatedPrice) {
  console.log("Julia is paying too much!");
} else if (juliaActualPrice < juliaEstimatedPrice) {
  console.log("Julia is paying too little!");
} else {
  console.log("Julia is paying the right amount!");
}
