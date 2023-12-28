export default function fizzBuzz(max) {
  const result = [];

  for (let i = 1; i < max; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      result.push(i);
    } else if (i % 3 !== 0 && i % 5 === 0) {
      result.push(i);
    }
  }

  return result;
}
