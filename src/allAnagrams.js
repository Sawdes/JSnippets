// Examples usage:
// allAnagrams("abcd", "badc", "dcba") // true
// allAnagrams("abcd", "baXc", "dcba") // false

function allAnagrams(array) {
  // Sort characters of each string and store the results.
  const sorted = array.map((str) => str.split("").sort().join(""));

  // Check if all sorted strings are the same.
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) return false;
  }

  // All strings are anagrams.
  return true;
}
