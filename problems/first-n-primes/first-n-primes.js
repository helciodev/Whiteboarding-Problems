import isPrime from "../is-prime/is-prime.js";

export default function firstNPrimes(n) {
  if (n === 1) return [2];

  const result = [];
  let i = 2;
  while (result.length < n) {
    if (isPrime(i)) result.push(i);
    i++;
  }

  return result;
}
