

const peterActualPrice=2500000;
let peterHouseArea=8*10*10+100;
console.log(peterHouseArea);
const peterHousePriceCal=[(8*10*10)*2.5*1000+100*300];
console.log(peterHousePriceCal);


if(peterActualPrice>peterHousePriceCal)
    {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying too little");
}

const juliaActualPrice=1000000;
const juliaHousePriceCal=[(5*11*8)*2.5*1000+70*300];
console.log(juliaHousePriceCal);
let juliaHouseArea=5*11*8+70;
console.log(juliaHouseArea);
if(juliaActualPrice>juliaHousePriceCal){
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying too little");
}