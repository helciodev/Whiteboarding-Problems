function commonFactors(num1, num2) {
  const result = [];

  for (let i = 1; i <= num1; i++) {
    let currentNum = i;
    if (num1 % currentNum === 0 && num2 % currentNum === 0) {
      result.push(currentNum);
    }
  }

  return result;
}

console.log(commonFactors(12, 50)); // => [ 1, 2 ]
console.log(commonFactors(6, 24)); // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22)); // => [ 1, 11 ]
console.log(commonFactors(45, 60)); // => [ 1, 3, 5, 15 ]
