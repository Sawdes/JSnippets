// Examples usage:
// console.log(hasUniqueCharacters("abcd")); // true
// console.log(hasUniqueCharacters("abcdABCD")); // true
// console.log(hasUniqueCharacters("abcd abcd")); // false
// console.log(hasUniqueCharacters("abcdAAA")); // false

function hasUniqueCharacters(string) {
  // Use a Set to track unique symbols
  const seenSymbols = new Set();

  // Iterate over each character in the string
  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];

    // Check if the symbol is already in the Set
    if (seenSymbols.has(symbol)) {
      return false; // Symbol has already been seen, return false
    }

    // Add the symbol to the Set
    seenSymbols.add(symbol);
  }

  return true; // All symbols are unique
}
