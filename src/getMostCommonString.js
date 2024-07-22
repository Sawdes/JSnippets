// Examples usage:
// getMostCommonString([
//   "abcd",
//   "123",
//   "qwerty",
//   "ytrewq",
//   "abcd",
//   "abcd",
//   "abcd",
// ]); // "abcd"

function getMostCommonString(stringsArray) {
  // Create an object to store the count of each string
  const knowStrings = new Object();

  // Iterate over the array of strings
  for (let i = 0; i < stringsArray.length; i++) {
    const string = stringsArray[i];

    // If the string is already in the knowStrings object, increment its count
    if (string in knowStrings) {
      knowStrings[string] += 1;
    } else {
      // If it's not in the object, initialize its count to 1
      knowStrings[string] = 1;
    }
  }

  // Use reduce to find the string with the highest count
  return Object.keys(knowStrings).reduce(
    (a, b) => (knowStrings[a] > knowStrings[b] ? a : b) // Return the key associated with the highest count
  );
}
