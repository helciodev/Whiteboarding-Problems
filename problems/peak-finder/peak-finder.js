export default function peakFinder(arr) {
  if (arr.length < 2) return arr;
  if (arr.length === 2) {
    const max = Math.max([...arr]);
    arr.indexOf(max);
  }
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    let nextEl = arr[i + 1];
    let previousEl = arr[i - 1];

    if (
      (!previousEl && currentEl > nextEl) ||
      (currentEl > previousEl && currentEl > nextEl) ||
      (currentEl > previousEl && !nextEl)
    )
      result.push(i);
  }

  return result;
}

peakFinder([1, 2, 3, 2, 1]);
