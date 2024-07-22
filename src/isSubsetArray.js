// Exapmles usages:
// isSubsetArray([2, 1, 1, 3], [1, 2, 3]) // true
// isSubsetArray([1, 1, 1, 3], [1, 3, 3]) // false

function isSubsetArray(source, subset) {
  if (source.length < subset) return false;
  const clonedSource = JSON.parse(JSON.stringify(source));

  for (let i = 0; i < subset.length; i++) {
    const subsetElem = subset[i];
    if (clonedSource.indexOf(subsetElem) === -1) return false;

    delete clonedSource[subsetElem];
  }

  return true;
}
