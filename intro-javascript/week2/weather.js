function whatToWear(temperature) {
  if (temperature < 10) {
    return "a warm coat and a scarf";
  } else if (temperature < 20) {
    return "a light jacket";
  } else {
    return "shorts and a t-shirt";
  }
}

const clothesToWear1 = whatToWear(15);
const clothesToWear2 = whatToWear(5)
console.log(clothesToWear1,clothesToWear2);
