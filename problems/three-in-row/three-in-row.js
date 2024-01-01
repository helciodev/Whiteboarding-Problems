export default function threeInARow(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNumToLookForSequence = arr[i];
    let nextPossibleConsecutive = arr[i + 1];
    let nextAfterNext = arr[i + 2];
    if (
      currentNumToLookForSequence === nextPossibleConsecutive &&
      currentNumToLookForSequence === nextAfterNext
    )
      return true;
  }
  return false;
}
