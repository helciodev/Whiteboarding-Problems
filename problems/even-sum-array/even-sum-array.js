function evenSum(n) {
  let result = 0;

  let i = 0;

  while (i <= n) {
    if (i % 2 === 0) result += i;
    i++;
  }

  return result;
}

function evenSumArray(arr) {
  return arr.map(evenSum);
}

console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]
