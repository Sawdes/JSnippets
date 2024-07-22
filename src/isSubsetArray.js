// Exapmles usages:
// isSubsetArray([2, 1, 1, 3], [1, 2, 3]) // true
// isSubsetArray([1, 1, 1, 3], [1, 3, 3]) // false

function isSubsetArray(source, subset) {
  // Check if the source array has fewer elements than the subset array
  // If so, the subset cannot be a subset of the source
  if (source.length < subset.length) return false;

  // Create a deep clone of the source array to work with
  const clonedSource = JSON.parse(JSON.stringify(source));

  // Iterate through each element of the subset array
  for (let i = 0; i < subset.length; i++) {
    const subsetElem = subset[i];

    // Check if the current subset element is not found in the cloned source
    if (clonedSource.indexOf(subsetElem) === -1) return false;

    // Remove the found element from the cloned source array
    // This ensures we don't count duplicates in the source
    delete clonedSource[clonedSource.indexOf(subsetElem)];
  }

  // If all elements of the subset were found in the source, return true
  return true;
}
