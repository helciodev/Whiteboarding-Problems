function powerSequence(base, length) {
  const result = [base];

  while (result.length < length) {
    let lastNumInResult = result.at(-1);
    result.push(base * lastNumInResult);
  }

  return result;
}

console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]
