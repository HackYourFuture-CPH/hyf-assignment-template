function highAndLow(numbers) {
  if (typeof numbers !== "string" || numbers.trim() === "") return "";
  const arr = numbers.split(/\s+/).map((x) => Number(x));
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("42"));
