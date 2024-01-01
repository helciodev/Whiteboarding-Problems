function hasSymmetry(arr) {
  const reverseStringArr = [...arr].reverse().join("");
  const arrString = arr.join("");

  return reverseStringArr === arrString;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(["cat", "dog", "bird", "dog", "cat"])); // => true
console.log(hasSymmetry(["cat", "dog", "bird", "bird", "cat"])); // => false
