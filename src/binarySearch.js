// Examples usage:
// simpleSearch([1, 3, 5, 8, 12, 30], 30) // 5
// simpleSearch([1, 3, 5, 8, 12, 30], 7) // -1

function binarySearch(sortedArray, target) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  // Check if the target is out of the bounds of the array
  if (target < sortedArray[leftIndex] || target > sortedArray[rightIndex]) {
    return -1; // Target not found
  }

  while (true) {
    // Check if target is at the left index
    if (target === sortedArray[leftIndex]) {
      return leftIndex; // Return left index if found
    }
    // Check if target is at the right index
    else if (target === sortedArray[rightIndex]) {
      return rightIndex; // Return right index if found
    }
    // If there are no more elements to search
    else if (rightIndex - leftIndex <= 1) {
      return -1; // Target not found
    }

    // Calculate the middle index
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    // If the target is greater than the middle element
    if (target > sortedArray[middleIndex]) {
      leftIndex = middleIndex + 1; // Narrow search to the right half
    }
    // If the target is less than the middle element
    else if (target < sortedArray[middleIndex]) {
      rightIndex = middleIndex - 1; // Narrow search to the left half
    }
    // If the target is found at the middle index
    else {
      return middleIndex; // Return the middle index
    }
  }
}
