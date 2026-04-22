const houseOfPeterWidth = 8;
const houseOfPeterDepth = 10;
const houseOfPeterHeight = 10;
const gardenOfPeterSize = 100;
const houseOfPeterPrice = 2500000;

const houseOfJuliaWidth = 5;
const houseOfJuliaDepth = 11;
const houseOfJuliaHeight = 8;
const gardenOfJuliaSize = 70;
const houseOfJuliaPrice = 1000000;


const pricePerCubicMeterHouse = 2.5 * 1000;
const pricePerSquareMeterGarden = 300;
const houseOfPeterMarketPrice = houseOfPeterWidth * houseOfPeterDepth * houseOfPeterHeight * pricePerCubicMeterHouse +  gardenOfPeterSize * pricePerSquareMeterGarden;
const houseOfJuliaMarketPrice = houseOfJuliaWidth * houseOfJuliaDepth *houseOfJuliaHeight * pricePerCubicMeterHouse +  gardenOfJuliaSize * pricePerSquareMeterGarden;

//compare houseOfPeterPrice vs houseOfPeterPriceByFormula
if (houseOfPeterPrice > houseOfPeterMarketPrice) {
  console.log("Peter is paying more than market price!");
} 
else if (houseOfPeterPrice == houseOfPeterMarketPrice) {
  console.log("Peter is paying market price!");
} 
else {
  console.log("Peter is paying less than market price!");
}

////compare houseOfJuliaPrice vs houseOfJuliaPriceByFormula
if (houseOfJuliaPrice > houseOfJuliaMarketPrice) {
  console.log("Julia is paying more than market price!");
} 
else if (houseOfJuliaPrice == houseOfJuliaMarketPrice) {
  console.log("Julia is paying market price!");
} 
else {
  console.log("Julia is paying less than market price!");
}
