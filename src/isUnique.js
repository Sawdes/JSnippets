function isUnique(string) {
  const seenSymbols = [];
  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];

    let leftIndex = 0;
    let rightIndex = seenSymbols.length - 1;
    while (leftIndex <= rightIndex) {
      if (
        symbol === seenSymbols[leftIndex] ||
        symbol === seenSymbols[rightIndex]
      ) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }

    seenSymbols.push(symbol);
  }

  return true;
}

// isUnique("abcd") return TRUE
// isUnique("abcdABCD") return TRUE

// isUnique("abcd abcd") return FALSE
// isUnique("abcdAAA") return FALse
