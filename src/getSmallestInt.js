function getSmallestInt(intArray) {
  return intArray.reduce((acc, item) => (item < acc ? item : acc)); // Accumulate value if it is less than the current accumulator
}
