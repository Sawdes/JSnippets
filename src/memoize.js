// Examples usage:
// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// })
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1

function memoize(fn) {
  // Create a memoization function that takes a function 'fn' as an argument
  const cache = {}; // Initialize an empty object to store cached results

  // Return a new function that will replace the original function
  return function (...args) {
    // Use the rest parameter to accept any number of arguments
    const key = JSON.stringify(args); // Create a cache key by converting the arguments to a JSON string

    // Check if the result for the given arguments already exists in the cache
    if (key in cache) {
      return cache[key]; // If it does, return the cached result
    }

    // If the result is not in the cache, call the original function with the provided arguments
    const result = fn.apply(this, args);
    cache[key] = result; // Store the result in the cache using the generated key

    return result; // Return the result, now saved in the cache
  };
}
