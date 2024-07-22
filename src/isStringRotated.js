// Examples usage:
// isStringRotated("qwerty", "ytrewq") // true

function isStringRotated(string, compareString) {
  // Inverted strings cannot be of different lengths
  if (string.length !== compareString.length) return false;
  // Reverse the input string
  const rotatedString = string.split("").reverse().join("");
  // Check if the rotated string is equal to the compareString
  return rotatedString === compareString;
}
