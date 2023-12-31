export default function twoDimensionalSize(arr) {
  return arr.reduce((acc, currentArr) => (acc += currentArr.length), 0);
}
