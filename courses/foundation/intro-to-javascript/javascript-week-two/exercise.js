


function funWithComma(input) {
    // Your code here
const words = input.split (" "); // breaks the string into an array of words using spaces as separators
if (words.length === 1) {
    return words[0];             // checks if the array has only one word
 } else if (words.length === 2 )
    return words.join (" and ");
    else {
        return words.slice(0, -1). join (" , ")  + " and " + words[words.length - 1];
    }
}

// Test cases
console.log(funWithComma("one two three"));           // "one, two and three"
console.log(funWithComma("1 2 3 4 5 6"));            // "1, 2, 3, 4, 5, and 6"
console.log(funWithComma("apples peaches plums pears")); // "apples, peaches, plums and pears"
console.log(funWithComma("one two"));                 // "one and two"
console.log(funWithComma("one"));                     // "one"