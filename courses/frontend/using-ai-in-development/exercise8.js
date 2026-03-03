// String formatting utilities

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function titleCase(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

function main() {
  console.log("--- capitalize ---");
  console.log(capitalize("hello"));
  console.log(capitalize("WORLD"));
  console.log(capitalize("javaScript"));
  console.log("--- titleCase ---");
  console.log(titleCase("hello world"));
  console.log(titleCase("javaScript is fun"));
  console.log(titleCase("MAKE THIS TITLE CASE"));
}

main();

export { capitalize, titleCase };
