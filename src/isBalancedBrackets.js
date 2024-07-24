// Examples usage:
// isBalancedBrackets("(({[]})) ()") // true
// isBalancedBrackets("(({[") // false

function isBalancedBrackets(string) {
  // Object to keep track of the number of each type of brackets
  const seenBrackets = {
    "{}": 0, // Count for curly brackets
    "()": 0, // Count for round brackets
    "[]": 0, // Count for square brackets
  };

  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // Current character

    // Check which type of bracket we have
    switch (char) {
      case "{":
      case "}":
        seenBrackets["{}"] += 1; // Increment curly brackets count
        break;

      case "(":
      case ")":
        seenBrackets["()"] += 1; // Increment round brackets count
        break;

      case "[":
      case "]":
        seenBrackets["[]"] += 1; // Increment square brackets count
        break;

      default:
        break; // Ignore other characters
    }
  }

  // Check if each type of bracket has an even count
  for (let brackets in seenBrackets) {
    if (seenBrackets[brackets] % 2 !== 0) {
      return false; // If any bracket count is odd, return false
    }
  }

  return true; // All brackets are balanced
}
