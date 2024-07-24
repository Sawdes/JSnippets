// Examples usage:
// console.log(isPalindrome("rececar")); // true
// console.log(isPalindrome("mouse")); // Is not palidrome and return false

// Exmaple useges with case sensitive:
// console.log(isPalindrome("annA", false)); // true
// console.log(isPalindrome("annA", true)); // false
// console.log(isPalindrome("", true)); // empty string is not Palindrome

function isPalindrome(string, caseSensitive = true) {
  // Clear empty spaces
  string.trim();

  // Empty string is not palindrome
  if (string === "") return false;

  // Convert the string to lowercase if case sensitivity is not required
  if (caseSensitive === false) string = string.toLowerCase();

  // Initialize indices for the left and right ends of the string
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  // Loop to compare characters from both ends of the string
  while (leftIndex <= rightIndex) {
    // If the characters do not match, the string is not a palindrome
    if (string[leftIndex] !== string[rightIndex]) return false;

    // Move indices towards the center for the next iteration
    leftIndex++;
    rightIndex--;
  }

  // If all characters matched, the string is a palindrome
  return true;
}
