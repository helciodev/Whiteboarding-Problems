import isPrime from "../is-prime/is-prime.js";

export default function nextTwoPrimes(num) {
  const nextTwoPrimesResult = [];

  let i = 0;
  while (nextTwoPrimesResult.length < 2) {
    if (i > num && isPrime(i)) nextTwoPrimesResult.push(i);
    i++;
  }
  return nextTwoPrimesResult;
}
