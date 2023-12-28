export default function printInverse(min, max) {
  if (min > max) return [];
  const result = [];
  for (let i = max - 1; i > min; i--) {
    result.push(i);
  }
  return result;
}
