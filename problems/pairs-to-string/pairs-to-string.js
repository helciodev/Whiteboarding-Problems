function pairsToString(arr) {
  let string = "";

  for (let array of arr) {
    let letter = array[0];
    let num = array[1];

    string += letter.repeat(num);
  }
  return string;
}

const array1 = [
  ["a", 3],
  ["b", 1],
  ["c", 2],
];
console.log(pairsToString(array1)); // => 'aaabcc'

const array2 = [
  ["f", 1],
  ["o", 2],
  ["d", 1],
  ["!", 1],
];
console.log(pairsToString(array2)); // => 'food!'
