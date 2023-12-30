export default function divisibleByThreePairSum(arr) {
  if (!arr.length) return [];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let currentElToSum = arr[j];
      if ((currentEl + currentElToSum) % 3 === 0) result.push([i, j]);
    }
  }

  return result;
}

// divisibleByThreePairSum()
