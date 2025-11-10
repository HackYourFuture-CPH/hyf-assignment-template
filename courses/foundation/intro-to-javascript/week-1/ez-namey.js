const firstWords = [
  "Easy",
  "Bright",
  "Quantum",
  "Smart",
  "Awesome",
  "Next",
  "Creative",
  "Hyper",
  "Future",
  "Magic",
];

const secondWords = [
  "Labs",
  "Solutions",
  "Dynamics",
  "Technologies",
  "Hub",
  "Works",
  "Systems",
  "Ventures",
  "Factory",
  "Studio",
];

const startupName =
  firstWords[Math.floor(Math.random() * 10)] +
  " " +
  secondWords[Math.floor(Math.random() * 10)];

console.log(startupName);
