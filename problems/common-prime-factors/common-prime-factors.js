import isPrime from "../is-prime/is-prime.js";

function commonPrimeFactors(num1, num2) {
  const result = [];

  for (let i = 1; i <= num1; i++) {
    let currentNum = i;
    if (
      isPrime(currentNum) &&
      num1 % currentNum === 0 &&
      num2 % currentNum === 0
    )
      result.push(currentNum);
  }

  return result;
}

console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
console.log(commonPrimeFactors(11, 22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]
