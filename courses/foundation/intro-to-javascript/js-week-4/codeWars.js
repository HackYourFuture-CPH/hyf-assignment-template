/* Vowel count  */
const phrase = "Oumaima Sakka";

function vowelCount() {
  count = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (
      phrase[i].toUpperCase() === "A" ||
      phrase[i].toUpperCase() === "E" ||
      phrase[i].toUpperCase() === "I" ||
      phrase[i].toUpperCase() === "O" ||
      phrase[i].toUpperCase() === "U"
    ) {
      count++;
    }
  }

  console.log("the number of vowels in this phrase is: " + count);
}

vowelCount();

/* Square every digit */

const num = 765;

function squareEveryDigit(num) {
  let stringSquareString = "";
  let numToString = num.toString();

  for (let i = 0; i < numToString.length; i++) {
    stringSquareString += (
      Number(numToString[i]) * Number(numToString[i])
    ).toString();
  }

  return Number(stringSquareString);
}

console.log(squareEveryDigit(num));

/* Highest and Lowest */

const number = "1 2 3 4 5";

function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);

  let highest = arr[0];
  let lowest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
    if (arr[i] < lowest) lowest = arr[i];
  }

  return highest+" "+lowest;
}
 console.log(highAndLow(number));

