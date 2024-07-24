// Examples usage:
// isBalancedBrackets("(({[]})) ()") // true
// isBalancedBrackets("(({[") // false

function isBalancedBrackets(string) {
  // Map to associate opening brackets with their corresponding closing brackets
  const bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Stack to keep track of expected closing brackets
  const stack = [];

  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // If the character is an opening bracket, push its corresponding closing bracket onto the stack
    if (bracketsMap[char]) {
      stack.push(bracketsMap[char]);
    }
    // If the character is a closing bracket
    else if (Object.values(bracketsMap).includes(char)) {
      // Check if the stack is empty or if the expected closing bracket is not on top of the stack
      const index = stack.indexOf(char);
      if (index === -1) return false; // Closing bracket doesn't match any opening bracket, return false

      // Remove the matched closing bracket from the stack
      stack.splice(index, 1);
    }
  }

  // If the stack is empty, it means all brackets were matched properly; return true
  // If there are still unmatched opening brackets in the stack, return false
  return stack.length === 0;
}
