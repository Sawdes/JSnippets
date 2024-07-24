// Examples usage:
// fibonacci(7) // 13
// fibonacci(-6) // -8
// fibonacci(-9) // 34

function fibonacci(n) {
  if (n === 0) return 0; // F(0) = 0
  if (n === 1) return 1; // F(1) = 1

  if (n < 0) {
    // Handle negative indices
    n = -n; // Make n positive for calculation
    // Use the property for negative Fibonacci numbers
    return (n % 2 === 0 ? -1 : 1) * fibonacci(n);
  }

  let prev = 0;
  let current = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    next = prev + current; // F(n) = F(n-1) + F(n-2)
    prev = current; // Update to the next Fibonacci number
    current = next;
  }

  return current;
}
