const firstWords = ["Awesome", "Agile", "Bright", "Advanced", "Fantastic", "Inspiring", "Modern", "Cutting-edge", "Confident", "Dynamic"];

const secondWords = ["Labs", "Works", "Space", "Path", "Tech", "Mind", "Cloud", "Loop", "AI", "Solutions"];

// Function to get random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const randomFirstWords= getRandomElement(firstWords);
const randomSecondWords = getRandomElement(secondWords);

console.log(`The startup name is  ${randomFirstWords} ${randomSecondWords} and it contains ${randomFirstWords.length + randomSecondWords.length} characters.`);