// Eamples usage
// flat(1, [1,2,3,[4,5,6],[7,8,[9,10,11],12]]); // [1,2,3,[4,5,6],[7,8,[9,10,11],12]]
// flat(2, [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12]]); // [1,2,3,4,5,6,7,8,9,10,11,12]

function flat(n = 1, arr) {
  // Function to flatten an array up to n levels deep
  if (n <= 0) {
    // If the depth n is less than or equal to 0, return the array as is
    return arr;
  }

  let result = []; // Initialize an empty array to store the flattened results
  for (let i = 0; i < arr.length; i++) {
    // Loop through each element in the input array
    const element = arr[i]; // Get the current element
    if (Array.isArray(element)) {
      // Check if the current element is an array
      result = result.concat(element); // If it's an array, concatenate it to the result
    } else {
      // If it's not an array
      result.push(element); // Add the element directly to the result
    }
  }

  // Recursively call flat on the result array, reducing depth by 1
  return flat(n - 1, result);
}
