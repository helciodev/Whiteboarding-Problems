function splitHalfArray(arr) {
  let innerArr1;
  let innerArr2;
  const result = [];
  if (arr.length % 2 === 0) {
    innerArr1 = arr.slice(0, arr.length / 2);
    innerArr2 = arr.slice(arr.length / 2);
  } else {
    innerArr1 = arr.slice(0, Math.floor(arr.length / 2));
    innerArr2 = arr.slice(Math.floor(arr.length / 2) + 1);
  }
  result.push(innerArr1, innerArr2);
  return result;
}

console.log(splitHalfArray([1, 2, 3, 4, 5])); // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(["a", "b", "c", "d", "e", "f"])); // =>[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
