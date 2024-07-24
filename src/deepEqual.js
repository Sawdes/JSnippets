// Examples usage:
// 1)
// const objA = { a: 1, b: 2, c: { d: 3 } };
// const objB = { a: 1, b: 2, c: { d: 3 } };
// deepEqual(objA, objB); // true
//
// 2)
// deepEqual(undefined, undefined) // true
//
// 3)
// deepEqual(null, null) // true

function deepEqual(obj1, obj2) {
  // Check if both values are the same reference
  if (obj1 === obj2) {
    return true;
  }

  // Check for type of objects and if either is null
  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  // Get the list of keys for both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through the keys of the first object
  for (let key of keys1) {
    // Recursively compare values for each key
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true; // All checks passed, the objects are equal
}
