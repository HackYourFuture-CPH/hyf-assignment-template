function whatToWear(temperature) {
  if (temperature < 0) {
    return "Its freezing! a heavy winter coat, gloves, and a warm hat";
  } else if (temperature < 10) {
    return "a warm coat,a jacket and warm pants and may be a scarf";
  } else if (temperature < 20) {
    return "a light sweater or hoodie with jeans";
  } else if (temperature < 30) {
    return "shorts and a t-shirt";
  } else {
    return "It's super hot! light clothing and plenty of sunscreen!";
  }
}
console.log(whatToWear(-5));
