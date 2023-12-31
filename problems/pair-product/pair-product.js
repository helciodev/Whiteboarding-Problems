export default function pairProduct(arr, num) {
  const result = [];
  if (!arr.length) return result;

  for (let i = 0; i < arr.length; i++) {
    let currentNumLookingForPair = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let currentPossiblePair = arr[j];
      if (currentNumLookingForPair * currentPossiblePair === num)
        result.push([i, j]);
    }
  }

  return result;
}
