function vowelIntotal(abc) {
  if (typeof abc !== "string") return 0;
  const matches = abc.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(vowelIntotal("abtdhkubolnlksmigk"));
console.log(vowelIntotal("AEIOU bui"));
