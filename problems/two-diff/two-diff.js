export default function twoDiff(arr) {
  const result = [];
  if (!arr.length) return result;

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let currentElComparing = arr[j];
      if (Math.abs(currentEl - currentElComparing) === 2) result.push([i, j]);
    }
  }
  return result;
}
