function whatToWear(degrees) {
  if (degrees < 0) {
    return "Wear a fur coat and don't forget a hat";
  } else if (degrees > 0 && degrees < 10) {
    return "Wear a coat or a jacket and long pants";
  } else if (degrees > 10 && degrees < 20) {
    return "Wear a light jacket, especially if it's sunny";
  } else {
    return "It's hot enough to wear shorts and a t-shirt";
  }
}

const clothesToWear = whatToWear(18);

console.log(clothesToWear);
