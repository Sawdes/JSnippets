// Examples usage:
// removeDupes("abcdabcd") // abcd

function removeDupes(string) {
  // Create a new Set to store unique characters
  const result = new Set();

  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    // Get the current character
    const char = string[i];

    // If the character is already in the Set, skip to the next iteration
    if (result.has(char)) continue;

    // Add the unique character to the Set
    result.add(char);
  }

  // Convert the Set back to an array and join it into a string before returning
  return Array.from(result).join("");
}
