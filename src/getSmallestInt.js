// Examples usage:
// getSmallestInt([10, 9, 6, 4, 2, 1, -8, -10]) // -10
// getSmallestInt([-99, 1, 2, 3, 4, 5] // 99

function getSmallestInt(intArray) {
  return intArray.reduce((acc, item) => (item < acc ? item : acc)); // Accumulate value if it is less than the current accumulator
}
