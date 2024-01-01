function reverse2D(arr) {
  return arr
    .map((array) => array.reverse().join(""))
    .reverse()
    .join("");
}
