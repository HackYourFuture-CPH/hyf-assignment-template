// A utility for working with URL query strings

function parseQuery(queryString) {
  if (!queryString) return {}; // Return an empty object if the query string is empty

  return queryString.split("&").reduce((acc, pair) => {
    const [key, value] = pair.split("=").map(decodeURIComponent); // Decode URI components
    acc[key] = value; // Add the key-value pair to the accumulator object
    return acc;
  }, {});
}

function buildUrl(base, params) {
  const query = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
  return `${base}?${query}`;
}

function main() {
  const url = "https://example.com/search?name=Alice&age=30&city=Copenhagen";
  const queryString = url.split("?")[1];

  console.log("--- input ---");
  console.log(queryString);

  console.log("\n--- parseQuery ---");
  const params = parseQuery(queryString);
  console.log(params);

  console.log("\n--- buildUrl ---");
  const newUrl = buildUrl("https://example.com/profile", params);
  console.log(newUrl);
}

main();

export { parseQuery, buildUrl };
