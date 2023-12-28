export default function oddRange(num) {
  const result = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) result.push(i);
  }

  return result;
}
