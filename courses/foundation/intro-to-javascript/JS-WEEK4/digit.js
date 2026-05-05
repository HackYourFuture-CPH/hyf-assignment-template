function digitProduct(input, maybeB) {
  if (typeof maybeB === "number" || typeof maybeB === "string") {
    const a = Number(input);
    const b = Number(maybeB);
    if (!Number.isNaN(a) && !Number.isNaN(b)) return a * b;
  }

  if (typeof input === "string" && input.includes("*")) {
    const parts = input.split("*").map((s) => s.trim());
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    if (!Number.isNaN(a) && !Number.isNaN(b)) return a * b;
  }

  const s = String(input);
  const digits = s.match(/\d/g);
  if (!digits || digits.length === 0) return 0;
  return digits.reduce((prod, d) => prod * Number(d), 1);
}

console.log(digitProduct("3*7"));
console.log(digitProduct(4, 12));
console.log(digitProduct(1234));
console.log(digitProduct("no digits"));
