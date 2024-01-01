function threeIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let nextNum = arr[i + 1];
    let nextNumAfterNext = arr[i + 2];

    if (currentNum + 1 === nextNum && nextNum + 1 === nextNumAfterNext)
      return true;
  }

  return false;
}
