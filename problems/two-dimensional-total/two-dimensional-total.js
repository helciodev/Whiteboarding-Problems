export default function twoDimensionalTotal(arr) {
  return arr.reduce(
    (acc, array) =>
      acc + array.reduce((accumulator, num) => accumulator + num, 0),
    0
  );
}
